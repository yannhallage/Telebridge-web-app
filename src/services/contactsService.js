// src/services/contactsService.js
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

// Récupérer tous les contacts
export const getContacts = async () => {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Ajouter un contact
export const addContact = async (contact) => {
    await addDoc(collection(db, "contacts"), contact);
};
