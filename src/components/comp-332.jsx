"use client"

import { Settings } from "lucide-react"

import { useState } from "react"
import { ArrowRightIcon } from "lucide-react"
import { cn } from "../lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function OnboardingDialog() {
  const [step, setStep] = useState(1)

  const stepContent = [
    { title: "Welcome", description: "Discover powerful components." },
    { title: "Customizable Components", description: "Fully customizable." },
    { title: "Ready to Start?", description: "Begin building interfaces." },
    { title: "Get Support", description: "Access docs and community." },
  ]

  const totalSteps = stepContent.length

  const handleContinue = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  return (
    <Dialog onOpenChange={(open) => open && setStep(1)}>
      <DialogTrigger asChild>
        <span><Settings className="h-5 w-5 text-gray-600" /></span>
      </DialogTrigger>
      <DialogContent className="max-w-md w-full p-0 gap-0 [&>button:last-child]:text-white">
        <div className="p-2">
          <img
            className="w-full rounded-md"
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Phone-Link-window-with-notifications-RW10JU0?scl=1"
            width={382}
            height={216}
            alt="dialog"
          />
        </div>
        <div className="space-y-6 px-6 pt-3 pb-6">
          <DialogHeader>
            <DialogTitle>{stepContent[step - 1].title}</DialogTitle>
            <DialogDescription>
              {stepContent[step - 1].description}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex justify-center space-x-1.5 max-sm:order-1">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-full h-2 w-2",
                    index + 1 === step ? "bg-primary" : "bg-primary/20"
                  )}
                />
              ))}
            </div>
            <DialogFooter className="flex gap-2">
              <DialogClose asChild>
                <Button variant="ghost">Skip</Button>
              </DialogClose>
              {step < totalSteps ? (
                <Button type="button" onClick={handleContinue} className={'bg-[#0067b8]'}>
                  Next
                  <ArrowRightIcon
                    className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                  />
                </Button>
              ) : (
                <DialogClose asChild>
                  <Button type="button" className={'bg-[#0067b8]'}>Okay</Button>
                </DialogClose>
              )}
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
