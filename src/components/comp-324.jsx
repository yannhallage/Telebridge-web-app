import { useEffect, useRef, useState } from "react"
import { OTPInput } from "input-otp"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import { checkUserExists } from "@/services/authService"

export default function OtpDialogLogin({ open, onOpenChange }) {
  const [value, setValue] = useState("")
  const [hasGuessed, setHasGuessed] = useState(undefined)
  const [error, setError] = useState("")
  const inputRef = useRef  (null)
  const closeButtonRef = useRef  (null)
  const navigate = useNavigate()
  const { login } = useAuth()

  useEffect(() => {
    if (hasGuessed) {
      closeButtonRef.current?.focus()
    }
  }, [hasGuessed])

  async function onSubmit(e) {
    e?.preventDefault?.()

    inputRef.current?.select()
    await new Promise((r) => setTimeout(r, 100))

    try {
      // Ici value = code OTP = identifiant Firebase
      const userId = value.trim()
      const userData = await checkUserExists(userId)

      if (userData) {
        login({ id: userId, ...userData }) // sauvegarde dans AuthContext
        setHasGuessed(true)
        setError("")
      } else {
        setHasGuessed(false)
        setError("Utilisateur introuvable dans Firebase")
      }
    } catch (err) {
      console.error(err)
      setHasGuessed(false)
      setError("Erreur lors de la connexion")
    }

    setValue("")
    setTimeout(() => {
      inputRef.current?.blur()
    }, 20)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">OTP code</Button> */}
      </DialogTrigger>
      <DialogContent className={"max-w-[425px]"}>
        <div className="flex flex-col items-center gap-2 ">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <svg
              className="stroke-zinc-800 dark:stroke-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
            </svg>
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              {hasGuessed ? "Code verified!" : "Enter confirmation code"}
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              {hasGuessed
                ? "Your code has been successfully verified."
                : "Check your email and enter the code"}
            </DialogDescription>
          </DialogHeader>
        </div>

        {hasGuessed ? (
          <div className="text-center">
            <DialogClose asChild>
              <Button
                type="button"
                ref={closeButtonRef}
                onClick={() => navigate("/messages")}
              >
                Continuez
              </Button>
            </DialogClose>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <OTPInput
                id="confirmation-code"
                ref={inputRef}
                value={value}
                onChange={setValue}
                containerClassName="flex items-center gap-3 has-disabled:opacity-50"
                maxLength={9}
                onFocus={() => setHasGuessed(undefined)}
                render={({ slots }) => (
                  <div className="flex gap-1">
                    {slots.map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                )}
                onComplete={onSubmit}
              />
            </div>
            {(hasGuessed === false || error) && (
              <p
                className="text-red-500 text-center text-xs"
                role="alert"
                aria-live="polite"
              >
                {error || "Invalid code. Please try again."}
              </p>
            )}
            <p className="text-center text-sm">
              <a className="underline hover:no-underline" href="#">
                Resend code
              </a>
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Slot(props) {
  return (
    <div
      className={cn(
        "border-input bg-background text-foreground flex size-9 items-center justify-center rounded-md border font-medium shadow-xs transition-[color,box-shadow]",
        { "border-ring ring-ring/50 z-10 ring-[3px]": props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  )
}
