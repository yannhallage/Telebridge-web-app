import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LoginPage from './pages/LoginPage';
import MessagesPage from './pages/MessagesPage';
import { Toaster } from './components/ui/toaster';
import { ContextForMessageAndCall } from './context/context';
import DiscussionsComponent from '@/components/pages/DiscussionsComponent';
import SelectChats from './components/pages/SelectChats';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './lib/ProtectedRoute';

function App() {
  const [divDiscussionAndCall, setDivDiscussionAndCall] = useState(<DiscussionsComponent />);
  const [divMessageAndCall, setDivMessageAndCall] = useState(<SelectChats />);
  const [infoText, setInfoText] = useState('Messages');

  return (
    <>
      <Helmet>
        <title>Telebridge App - Restez connecté partout</title>
        <meta name="description" content="Utilisez WhatsApp sur votre ordinateur. Synchronisez vos messages et restez connecté avec vos proches depuis votre navigateur web." />
      </Helmet>

      <Router>
        <AuthProvider>
          <div className="min-h-screen bg-white">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/web"
                element={
                  <ProtectedRoute>
                    <ContextForMessageAndCall.Provider value={{
                      divDiscussionAndCall, setDivDiscussionAndCall,
                      divMessageAndCall, setDivMessageAndCall,
                      infoText, setInfoText,
                    }}>
                      <MessagesPage />
                    </ContextForMessageAndCall.Provider>
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Toaster />
          </div>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
