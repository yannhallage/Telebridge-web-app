import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';

import { Input } from '../components/ui/input';

import { Badge } from '../components/ui/badge';
import { Contact } from 'lucide-react';

import {
    MessageCircle,
    Search,
    MoreVertical,
    Video,
    Paperclip,
    Smile,
    Mic,
    Phone,
    Send,
    BatteryFull,
    Archive,
    Star,
    Settings,
    LogOut,
    Filter,
    MonitorSmartphone,
    Slack,
    Edit
} from 'lucide-react';
import { useToast } from '../components/ui/use-toast';
import AlertComponent from '../components/comp-313';
import OnboardingDialog from '../components/comp-332.jsx';
import SearchDialogContact from '@/components/comp-333';


function MessagesPage() {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [selectedChat, setSelectedChat] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

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

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            toast({
                title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀"
            });
            setMessageInput('');
        }
    };

    const handleLogout = () => {
        navigate('/');
    };

    const handleFeatureClick = (feature) => {
        toast({
            title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀"
        });
    };

    const filteredConversations = conversations.filter(conv =>
        conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="h-screen bg-white flex">
            {/* Sidebar */}
            <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
                {/* Header */}
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            {/* <Avatar className="h-10 w-10">
                                <AvatarImage src="" />
                                <AvatarFallback className="bg-gray-300 text-gray-600">
                                    <MonitorSmartphone className="h-8 w-8 text-[#0067b8]" />
                                </AvatarFallback>
                            </Avatar> */}
                            <MonitorSmartphone className="h-8 w-8 text-[#0067b8]" />
                            <span className="font-semibold text-gray-900">Android</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            {/* <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleFeatureClick('archive')}
                            >
                                <Slack className="h-5 w-5 text-gray-600" />
                            </Button> */}

                            <Button
                                variant="ghost"
                                size="icon"
                            // onClick={() => handleFeatureClick('settings')}
                            >
                                {/* <Settings className="h-5 w-5 text-gray-600" /> */}
                                <OnboardingDialog />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                            // onClick={handleLogout}
                            >
                                {/* <LogOut className="h-5 w-5 text-gray-600" /> */}
                                <AlertComponent />
                            </Button>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Rechercher ou commencer une nouvelle discussion"
                            className="pl-10 bg-white"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Notifications */}
                <motion.div className="p-4 bg-blue-50 border-b border-gray-200 " initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}>
                    <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">Notifications</p>
                            <p className="text-xs text-gray-600 mt-1">Effacer tout</p>
                        </div>
                    </div>

                    <div className="mt-3 space-y-2 max-h-96 overflow-y-auto pr-2 scroll-hidden">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="flex items-start space-x-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                                        B
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-gray-900">Bing</p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        L'ONU déclare officiellement l'état de famine à Gaza, la première à toucher le Moyen-Orient
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">09:27</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="flex items-start space-x-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">
                                        O
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-gray-900">Orange Max it</p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        Envoie de l'argent vers le Burkina ! Profite de frais réduits à 0,5% pour tes transferts vers le Burkina Faso. RDV dans "Transfert d'argent" pour en profiter !
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">08:45</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="flex items-start space-x-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">
                                        O
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-gray-900">Orange Max it</p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        Envoie de l'argent vers le Burkina ! Profite de frais réduits à 0,5% pour tes transferts vers le Burkina Faso. RDV dans "Transfert d'argent" pour en profiter !
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">08:45</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="flex items-start space-x-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">
                                        O
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-gray-900">Orange Max it</p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        Envoie de l'argent vers le Burkina ! Profite de frais réduits à 0,5% pour tes transferts vers le Burkina Faso. RDV dans "Transfert d'argent" pour en profiter !
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">08:45</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>

            <div className="flex flex-col flex-1 max-h-screen overflow-y-auto ">
                {/* Messages Header */}
                <div className="p-4 bg-white border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg space-x-3 flex font-semibold text-gray-900">
                            <span>
                                Messages
                            </span>
                            {/* <span>
                                Appels
                            </span> */}
                        </h2>
                        <div className="flex items-center space-x-2">

                            <SearchDialogContact />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleFeatureClick('new-message')}
                            >
                                <Phone className="h-4 w-4 text-gray-600" />
                                {/* <TooltipDemo
                                    text={'effectuer des appels'}
                                /> */}
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleFeatureClick('new-message')}
                            >
                                <Edit className="h-4 w-4 text-gray-600" />
                            </Button>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Récent</p>
                </div>

                {/* Conversations List */}
                <div className="flex-1 overflow-y-auto scroll-hidden">
                    {filteredConversations.map((conversation) => (
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
                    ))}
                </div>
            </div>
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {selectedChat ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={selectedChat.avatar} />
                                        <AvatarFallback className="bg-gray-200 text-gray-600">
                                            {selectedChat.name.slice(0, 2)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium text-gray-900">{selectedChat.name}</p>
                                        <p className="text-sm text-gray-500">
                                            {selectedChat.online ? 'En ligne' : 'Vu récemment'}
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
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 p-4 bg-gray-50 flex items-center justify-center">
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
                        </div>

                        {/* Message Input */}
                        <div className="p-4 bg-white border-t border-gray-200">
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
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center bg-gray-50 ">
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
                    </div>
                )}
            </div>
        </div>
    );
}

export default MessagesPage;