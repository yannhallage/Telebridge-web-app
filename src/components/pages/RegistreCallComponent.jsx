
import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { useState, useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const RegistreCallComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedChat, setSelectedChat] = useState(null);

    const conversations = [
        {
            id: 1,
            numero: '+33672643',
            typeCall: 'Sortant',
            time: 'Hier',
            avatar: null,
        },
        {
            id: 2,
            numero: '+33928324',
            typeCall: 'Entrant',
            time: 'Hier',
            avatar: null,
            online: false
        },
        {
            id: 3,
            numero: '+2250797814648',
            typeCall: 'Entrant',
            time: 'Hier',
            avatar: null,
        },
        {
            id: 4,
            numero: '+332686762643',
            typeCall: 'Sortant',
            time: 'Hier',
            avatar: null,
            online: false
        },
        {
            id: 5,
            numero: '+333227837',
            typeCall: 'Entrant',
            time: 'mercredi',
            avatar: null,
            online: false
        },
        {
            id: 6,
            numero: '+337877473',
            typeCall: 'Sortant',
            time: 'mercredi',
            unread: 1,
            avatar: null,
        }
    ];

    const filteredConversations = conversations.filter(conv =>
        conv.numero.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conv.typeCall.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return <div>
        {
            filteredConversations.map((conversation) => (
                <motion.div
                    key={conversation.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-color`}
                    onClick={() => handleChatSelect(conversation)}
                >
                    <div className="flex items-start space-x-3">
                        <div className="relative">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={conversation.avatar} />
                                <AvatarFallback className="bg-gray-200 text-gray-600">
                                    {conversation.numero.slice(0, 2)}
                                </AvatarFallback>
                            </Avatar>
                            {conversation.online && (
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <p className="font-medium text-gray-900 truncate">
                                    {conversation.numero}
                                </p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs text-gray-500">{conversation.time}</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 truncate mt-1">
                                {conversation.typeCall}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))
        }
    </div>;
};

export default RegistreCallComponent;