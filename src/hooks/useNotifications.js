import { useState, useEffect } from "react";
import { subscribeToUserData } from "@/services/contactsService";

const userId = 499752192;

export const useNotifications = () => {
    const [contacts, setContacts] = useState([]);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        if (!userId) return;

        subscribeToUserData(userId, (data) => {
            if (!data) return;

            // Contacts
            setContacts(Array.isArray(data.contacts) ? data.contacts : []);

            // Notifications : transformer l'objet en tableau [{id, ...}]
            if (data.notifications && typeof data.notifications === "object") {
                const notifArray = Object.entries(data.notifications).map(
                    ([id, notif]) => ({
                        id,
                        ...notif,
                    })
                );
                setNotifications(notifArray);
            } else {
                setNotifications([]);
            }
        });
    }, [userId]);

    return { contacts, notifications };
};
