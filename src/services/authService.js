// src/services/userService.ts
import { ref, get } from "firebase/database";
import { database } from "../config/firebaseConfig";

// Vérifier si l'utilisateur existe dans Firebase
export const checkUserExists = async (userId) => {
    try {
        const userRef = ref(database, `users/${userId}`);
        const snapshot = await get(userRef);
        return snapshot.exists() ? snapshot.val() : null;
    } catch (error) {
        console.error("Erreur lors de la vérification de l'utilisateur:", error);
        return null;
    }
};
