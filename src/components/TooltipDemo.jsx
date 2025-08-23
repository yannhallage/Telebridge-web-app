import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo({ text }) {
    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span><Phone className="h-4 w-4 text-gray-600" /></span>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{text}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
