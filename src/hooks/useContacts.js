
import { useState, useEffect } from "react";
import { subscribeToUserData } from "@/services/contactsService";

const userId = 499752192;
export const useContacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        if (!userId) return;
        subscribeToUserData(userId, setContacts);
    }, [userId]);

    return { contacts };
};
