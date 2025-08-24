// src/services/contactsService.js
import { ref, get, set } from "firebase/database";
import { database } from "../config/firebaseConfig";

// Récupérer tous les contacts
export const getContacts = async () => {
    const contactsRef = ref(database, "contacts");
    const snapshot = await get(contactsRef);
    return snapshot.exists() ? snapshot.val() : [];
};

// Ajouter un contact
export const addContact = async (contact) => {
    // Ici on peut générer un ID aléatoire
    const newRef = ref(database, `contacts/${Date.now()}`);
    await set(newRef, contact);
};
