import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LoginPage from './pages/LoginPage';
import MessagesPage from './pages/MessagesPage';
import { Toaster } from './components/ui/toaster';

function App() {
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
            <Route path="/messages" element={<MessagesPage />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </>
  );
}

export default App;