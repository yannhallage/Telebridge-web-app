// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // nouvel état

    useEffect(() => {
        const storedUser = localStorage.getItem("keySession");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Erreur parsing keySession:", error);
                localStorage.removeItem("keySession");
            }
        }
        setLoading(false); // fin du chargement
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("keySession", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("keySession");
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth doit être utilisé dans un AuthProvider");
    return context;
};
