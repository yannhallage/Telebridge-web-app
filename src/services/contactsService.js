import { ref, onValue, update } from "firebase/database";
import { database } from "../config/firebaseConfig";

// Récupérer toutes les données d'un utilisateur en temps réel
export const subscribeToUserData = (userId, callback) => {
    const userRef = ref(database, `users/${userId}`);
    onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
            callback(snapshot.val());
        } else {
            callback({});
        }
    });
};

// Ajouter un contact
export const addContact = async (userId, contact) => {
    const id = Date.now();
    const updates = {};
    updates[`users/${userId}/contacts/${id}`] = { ...contact, timestamp: Date.now() };
    await update(ref(database), updates);
};
