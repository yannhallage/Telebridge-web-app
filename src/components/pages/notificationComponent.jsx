import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const NotificationComponent = () => {

    const notifications = [
        {
            id: 1,
            avatar:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'John Doe',
            message: 'Hello, how are you?',
            time: '10:03',
        },
        {
            id: 2,
            avatar:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Jane Smith',
            message: 'Don’t forget the meeting at 2 PM.',
            time: '11:15',
        },
        {
            id: 3,
            avatar:
                'https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Michael Brown',
            message: 'Can you review my last report?',
            time: '12:47',
        },
        {
            id: 4,
            avatar:
                'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Emily Davis',
            message: 'I sent you the documents by email.',
            time: '14:22',
        },
        {
            id: 5,
            avatar:
                'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Chris Johnson',
            message: 'Let’s catch up this weekend!',
            time: '16:40',
        },
        {
            id: 6,
            avatar:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Sophia Wilson',
            message: 'Thanks for your help earlier.',
            time: '18:05',
        },
    ];

    return (
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

            {notifications.map((notification_indice) => {
                return (
                    <div key={notification_indice.id} className="mt-3 space-y-2 ">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="flex items-start space-x-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                                        B
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-gray-900">
                                        {
                                            notification_indice.name
                                        }
</p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        {
                                            notification_indice.message
                                        }
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {
                                            notification_indice.time
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </motion.div>
    )
}
export default NotificationComponent;