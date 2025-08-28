
import { useState, useEffect } from "react";
import { subscribeToUserData } from "@/services/contactsService";

// const userId = 305284749;
export const useContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [userId, setUserId] = useState(undefined);
    
    useEffect(() => {
        const storedUser = localStorage.getItem("keySession");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUserId(user.id);
            subscribeToUserData(userId, setContacts);

            if (!userId) return;
        }
    }, [userId]);

    return { contacts };
};
