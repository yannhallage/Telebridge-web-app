import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNotifications } from "@/hooks/useNotifications";


const NotificationComponent = () => {
    const { notifications } = useNotifications();

    return (
        <motion.div
            className="p-4 rounded-2xl  bg-gray-50 backdrop-blur-md shadow-lg border border-white/20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-gray-900">Notifications</p>
                <button className="text-xs text-blue-500 hover:text-blue-600">
                    Effacer tout
                </button>
            </div>

            {/* Notifications list */}
            <div className="space-y-3">
                {notifications.map((item) => (
                    <motion.div
                        key={item.id}
                        className="p-3 rounded-xl bg-white/40 backdrop-blur-md border border-white/20 shadow-sm flex items-start space-x-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Avatar className="h-10 w-10 ring-2 ring-white/40 shadow-md">
                                <AvatarFallback className="bg-gray-100">
                                    <img
                                        src={`data:image/png;base64,${item.logo}`}
                                        alt={item.appName}
                                        className="rounded-full"
                                    />
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{item.title}</p>
                            <p className="text-xs text-gray-600 line-clamp-2">{item.message}</p>
                            <p className="text-[11px] text-gray-400 mt-1">{item.time}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>

    )
}
export default NotificationComponent;