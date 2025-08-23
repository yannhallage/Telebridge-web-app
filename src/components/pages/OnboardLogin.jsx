"use client"
import { useNavigate } from 'react-router-dom';
import OtpDialogLogin from '@/components/comp-324';
import { Button } from "@/components/ui/button"
import { useState } from 'react';
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

export default function OnboardingDialogForLogin() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="border-[#0067b8] w-full text-[#0067b8] hover:bg-green-50 hover:text-gray-600"
                    >
                        Commencer
                    </Button>
                </DialogTrigger>

                <DialogContent className="max-w-md w-full p-0 gap-0 [&>button:last-child]:text-white">
                    <div className="p-2">
                        <img
                            className="w-full rounded-md"
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/msft-open-laptop-with-mobile-phone-floating-emojis-RW10U7B?scl=1"
                            width={382}
                            height={216}
                            alt="dialog"
                        />
                    </div>

                    <div className="space-y-6 px-6 pt-3 pb-6">
                        <DialogHeader>
                            <DialogTitle>Bienvenue</DialogTitle>
                            <DialogDescription>
                                Choisissez votre type de téléphone pour continuer.
                            </DialogDescription>
                        </DialogHeader>

                        <DialogFooter className="flex gap-3 justify-end">
                            <DialogClose asChild>
                                <Button className="bg-green-600 w-full sm:w-auto"
                                    onClick={() => {
                                        setIsOpen(true)
                                    }}
                                >Android</Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button className="bg-[#0067b8] w-full sm:w-auto">iPhone</Button>
                            </DialogClose>
                        </DialogFooter>
                    </div>
                </DialogContent>
            </Dialog>

            <OtpDialogLogin open={isOpen} onOpenChange={setIsOpen} />
        </>
    )
}