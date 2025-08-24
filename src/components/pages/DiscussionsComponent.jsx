import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { useState, useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ContextForMessageAndCall } from '@/context/context'
import SelectChats from "@/components/pages/SelectChats";

const DiscussionsComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedChat, setSelectedChat] = useState(null);
    const { divDiscussionAndCall, setDivDiscussionAndCall,
        divMessageAndCall, setDivMessageAndCall } = useContext(ContextForMessageAndCall)

    const conversations = [
        {
            id: 1,
            name: '+33672643',
            lastMessage: 'Achat bien effectué par le 0700764386, le 21-08-2025 21:32. Vous bénéficiez des...',
            time: 'Hier',
            unread: 0,
            avatar: null,
            online: true
        },
        {
            id: 2,
            name: '+33928324',
            lastMessage: 'Vous avez reçu 4.800F De DJAMO',
            time: 'Hier',
            unread: 0,
            avatar: null,
            online: false
        },
        {
            id: 3,
            name: '+2250797814648',
            lastMessage: 'non',
            time: 'Hier',
            unread: 0,
            avatar: null,
            online: true
        },
        {
            id: 4,
            name: '+332686762643',
            lastMessage: '6.6Go rien que pour toi! Ce 21/08/2025, achète un pass surprise internet 2000f via...',
            time: 'Hier',
            unread: 0,
            avatar: null,
            online: false
        },
        {
            id: 5,
            name: '+333227837',
            lastMessage: 'Toujours en vacances et ton iPhone sature déjà ? Offre-toi iCloud+ avec...',
            time: 'mercredi',
            unread: 0,
            avatar: null,
            online: false
        },
        {
            id: 6,
            name: '+337877473',
            lastMessage: 'Nouveau message',
            time: 'mercredi',
            unread: 1,
            avatar: null,
            online: true
        }
    ];
    const filteredConversations = conversations.filter(conv =>
        conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const handleChatSelect = (dataDiscussions) => {
        // console.log(id)
        setSelectedChat(dataDiscussions)
        setDivMessageAndCall(
            <SelectChats
                Children={dataDiscussions}
            />
        );
    }
    return (
        <>
            {
                filteredConversations.map((conversation) => (
                    <motion.div
                        key={conversation.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${selectedChat?.id === conversation.id ? 'bg-green-50 border-l-4 border-l-green-500' : ''
                            }`}
                        onClick={() => handleChatSelect(conversation)}
                    >
                        <div className="flex items-start space-x-3">
                            <div className="relative">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={conversation.avatar} />
                                    <AvatarFallback className="bg-gray-200 text-gray-600">
                                        {conversation.name.slice(0, 2)}
                                    </AvatarFallback>
                                </Avatar>
                                {conversation.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <p className="font-medium text-gray-900 truncate">
                                        {conversation.name}
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xs text-gray-500">{conversation.time}</span>
                                        {conversation.unread > 0 && (
                                            <Badge className="bg-green-500 text-white text-xs px-2 py-1">
                                                {conversation.unread}
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 truncate mt-1">
                                    {conversation.lastMessage}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </>
    )
}

export default DiscussionsComponent;