import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { useState } from "react";
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from "../ui/button";

import {
    MessageCircle,
    MoreVertical,
    Video,
    Paperclip,
    Smile,
    Mic,
    Phone,
    Send,
    BatteryFull,
} from 'lucide-react';

const SelectChats = ({ Children }) => {
    // const [selectedChat, setSelectedChat] = useState(null);
    const [messageInput, setMessageInput] = useState('');

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            toast({
                title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀"
            });
            setMessageInput('');
        }
    };
    const handleFeatureClick = (feature) => {
        toast({
            title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀"
        });
    };
    
    return (
        <>
            {Children ? (
                <>
                    {/* Chat Header */}
                    <motion.div className="p-4 bg-gray-50 border-b border-gray-200"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={Children.avatar} />
                                    <AvatarFallback className="bg-gray-200 text-gray-600">
                                        {Children.name.slice(0, 2)}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium text-gray-900">{Children.name}</p>
                                    <p className="text-sm text-gray-500">
                                        {Children.online ? 'En ligne' : 'Vu récemment'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleFeatureClick('video-call')}
                                >
                                    <Video className="h-5 w-5 text-gray-600" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleFeatureClick('voice-call')}
                                >
                                    <Phone className="h-5 w-5 text-gray-600" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleFeatureClick('more-options')}
                                >
                                    <MoreVertical className="h-5 w-5 text-gray-600" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Chat Messages */}
                    <motion.div className="flex-1 p-4 bg-gray-50 flex items-center justify-center"
                    >
                        <div className="text-center max-w-md">
                            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="h-12 w-12 text-blue-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Vos messages récents apparaîtront ici
                            </h3>
                            <p className="text-gray-600">
                                Nous afficherons uniquement les messages qui ont été reçus lorsque vous serez connecté.
                            </p>
                        </div>
                    </motion.div>

                    {/* Message Input */}
                    <motion.div className="p-4 bg-white border-t border-gray-200"
                    >
                        <div className="flex items-center space-x-3">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleFeatureClick('attach')}
                            >
                                <Paperclip className="h-5 w-5 text-gray-600" />
                            </Button>
                            <div className="flex-1 relative">
                                <Input
                                    placeholder="Tapez un message"
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    className="pr-20"
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                    onClick={() => handleFeatureClick('emoji')}
                                >
                                    <Smile className="h-4 w-4 text-gray-600" />
                                </Button>
                            </div>
                            {messageInput.trim() ? (
                                <Button
                                    size="icon"
                                    className="bg-green-600 hover:bg-green-700 text-white"
                                    onClick={handleSendMessage}
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            ) : (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleFeatureClick('voice-message')}
                                >
                                    <Mic className="h-5 w-5 text-gray-600" />
                                </Button>
                            )}
                        </div>
                    </motion.div>
                </>
            ) : (
                <motion.div className="flex-1 flex items-center justify-center bg-gray-50 "
                >
                    <div className="text-center max-w-md">
                        {/* <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <MessageCircle className="h-16 w-16 text-green-600" />
                                        </div> */}
                        <div className="flex items-center justify-center mx-auto mb-6">
                            <img
                                className="w-full rounded-md"
                                src="https://imgs.search.brave.com/5zZ6i56YWRT--Z6FTQ9Dgr_1ZdlJ7h1Ic9H6l_WDUeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXBw/b3J0Lm1pY3Jvc29m/dC5jb20vaW1hZ2Vz/L2ZyLWZyL2EyMzlj/MGU0LTRjZTUtMDQz/Ni0zZmVlLTY5MWMw/MWRhMGU4NQ"
                                width={382}
                                height={216}
                                alt="dialog"
                            />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Telebridge App
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Sélectionnez une conversation pour commencer à discuter
                        </p>
                        <p className="text-sm text-gray-500">
                            Des tarifs pour les messages réseau et les échanges de données peuvent s'appliquer.
                        </p>
                    </div>
                </motion.div>
            )}
        </>
    )
};

export default SelectChats;