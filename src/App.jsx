import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LoginPage from './pages/LoginPage';
import MessagesPage from './pages/MessagesPage';
import { Toaster } from './components/ui/toaster';
import { ContextForMessageAndCall } from './context/context';
import DiscussionsComponent from '@/components/pages/DiscussionsComponent';
import SelectChats from './components/pages/SelectChats';

function App() {
  const [divDiscussionAndCall, setDivDiscussionAndCall] = useState(
    <DiscussionsComponent />
  )
  const [divMessageAndCall, setDivMessageAndCall] = useState(
    <SelectChats />
  )
  const [infoText, setInfoText] = useState(
    'Messages'
  )


  return (
    <>
      <Helmet>
        <title>Telebridge App - Restez connecté partout</title>
        <meta name="description" content="Utilisez WhatsApp sur votre ordinateur. Synchronisez vos messages et restez connecté avec vos proches depuis votre navigateur web." />
        <meta property="og:title" content="Telebridge App - Restez connecté partout" />
        <meta property="og:description" content="Utilisez WhatsApp sur votre ordinateur. Synchronisez vos messages et restez connecté avec vos proches depuis votre navigateur web." />
      </Helmet>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/messages" element={
              <ContextForMessageAndCall.Provider value={{
                divDiscussionAndCall, setDivDiscussionAndCall,
                divMessageAndCall, setDivMessageAndCall,
                infoText, setInfoText,
              }}>
                <MessagesPage />
              </ContextForMessageAndCall.Provider>
            } />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </>
  );
}

export default App;