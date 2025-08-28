import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <div>Chargement...</div>; // tu peux mettre un spinner ici
    }

    if (!isAuthenticated) {
        return <Navigate to="/" replace />; // redirige vers login
    }

    return children;
};

export default ProtectedRoute;
