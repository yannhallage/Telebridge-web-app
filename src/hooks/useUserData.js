// src/hooks/useUserData.js
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../config/firebaseConfig";

export const useUserData = (userId) => {
    const [contacts, setContacts] = useState([]);
    const [sms, setSms] = useState([]);
    const [calls, setCalls] = useState([]);

    useEffect(() => {
        if (!userId) return;

        const contactsRef = ref(database, `users/${userId}/contacts`);
        const smsRef = ref(database, `users/${userId}/sms`);
        const callsRef = ref(database, `users/${userId}/calls`);

        const unsubscribeContacts = onValue(contactsRef, (snapshot) => {
            setContacts(snapshot.val() || []);
        });

        const unsubscribeSms = onValue(smsRef, (snapshot) => {
            setSms(snapshot.val() || []);
        });

        const unsubscribeCalls = onValue(callsRef, (snapshot) => {
            setCalls(snapshot.val() || []);
        });

        return () => {
            unsubscribeContacts();
            unsubscribeSms();
            unsubscribeCalls();
        };
    }, [userId]);

    return { contacts, sms, calls };
};
