import { motion } from "framer-motion"

import {
    Phone,
    User
} from 'lucide-react';
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "../ui/input";

const CallComponent = () => {
    const digits = [
        { label: "1", sub: "" },
        { label: "2", sub: "ABC" },
        { label: "3", sub: "DEF" },
        { label: "4", sub: "GHI" },
        { label: "5", sub: "JKL" },
        { label: "6", sub: "MNO" },
        { label: "7", sub: "PQRS" },
        { label: "8", sub: "TUV" },
        { label: "9", sub: "WXYZ" },
        { label: "*", sub: "" },
        { label: "0", sub: "+" },
        { label: "#", sub: "" },
    ]
    return (
        <motion.div className="flex flex-col bg-gray-50  items-center justify-center min-h-screen space-y-6"
            
        >
            {/* Champ de recherche */}
            <Input
                type="text"
                placeholder="Rechercher dans vos contacts"
                className="w-80 border-b-2 border-purple-500 focus-visible:ring-0 focus-visible:ring-offset-0"
            />

            {/* Avatar utilisateur */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-200">
                <User size={40} className="text-gray-600" />
            </div>

            {/* Pavé numérique */}
            <div className="grid grid-cols-3 gap-4">
                {digits.map((d, i) => (
                    <Card key={i} className="w-[47px] h-[47px] flex items-center justify-center">
                        <CardContent className="flex flex-col items-center justify-center p-0">
                            <span className="text-xl font-bold">{d.label}</span>
                            <span className="text-xs text-gray-500">{d.sub}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Bouton appel */}
            <Button
                size="icon"
                className="w-11 h-11 rounded-full bg-gray-300 hover:bg-green-500"
            >
                <Phone size={20} className="text-white" />
            </Button>
        </motion.div>
    );
};

export default CallComponent;   