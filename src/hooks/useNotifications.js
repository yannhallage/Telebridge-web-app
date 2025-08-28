import { useState, useEffect } from "react";
import { subscribeToUserData } from "@/services/contactsService";

export const useNotifications = () => {
    const [contacts, setContacts] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Récupérer l'utilisateur depuis localStorage
        const storedUser = localStorage.getItem("keySession");
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                setUserId(user.id);
            } catch (err) {
                console.error("Erreur parsing keySession:", err);
            }
        }
    }, []);

    useEffect(() => {
        if (!userId) return;

        // S'abonner aux données Firebase
        const unsubscribe = subscribeToUserData(userId, (data) => {
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

        // Cleanup si le composant se démonte
        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, [userId]);

    return { contacts, notifications };
};
