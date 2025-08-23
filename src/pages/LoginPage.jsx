import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

import { Separator } from '../components/ui/separator';

import { MessageCircle, Smartphone, Settings, Link, QrCode, Download, HelpCircle, MonitorSmartphone } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';
import AccordionFromOrigin from '../components/comp-335';
import OnboardingDialogForLogin from '@/components/pages/OnboardLogin';


function LoginPage() {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [stayLoggedIn, setStayLoggedIn] = useState(false);

    const handleQRScan = () => {
        toast({
            title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀"
        });
        
        // navigate('/messages');
        // setTimeout(() => {
        // }, 2000);
    };

    const handlePhoneLogin = () => {
        toast({
            title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀"
        });
    };

    const handleDownloadApp = () => {
        toast({
            title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀"
        });
    };

    const handleGetStarted = () => {
        navigate('/messages')
        // toast({
        //     title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀"
        // });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <MonitorSmartphone className="h-8 w-8 text-[#0067b8]" />
                        <span className="text-2xl font-semibold text-gray-900">Telebridge App</span>
                    </div>
                </div>
            </header>

            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left side - Login Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="w-full max-w-md mx-auto shadow-lg">
                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-xl font-semibold text-gray-900">
                                    Étapes pour se connecter
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Steps */}
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#0067b8] text-white rounded-full flex items-center justify-center text-sm font-medium">
                                            1
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-700">
                                                Ouvrez <span className="font-medium text-[#0067b8]">Telebridge</span> sur votre téléphone
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#0067b8] text-white rounded-full flex items-center justify-center text-sm font-medium">
                                            2
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-700">
                                                Sur Android, appuyez sur Menu <Settings className="inline h-3 w-3" /> ou sur iPhone, appuyez sur Réglages <Settings className="inline h-3 w-3" />
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#0067b8] text-white rounded-full flex items-center justify-center text-sm font-medium">
                                            3
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-700">
                                                Appuyez sur <span className="font-medium">Appareils liés</span>, puis <span className="font-medium">Lier un appareil</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#0067b8] text-white rounded-full flex items-center justify-center text-sm font-medium">
                                            4
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-700">
                                                Scannez le code QR pour confirmer
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                {/* <Button
                                    variant="link"
                                    className="w-full text-[#0067b8] hover:text-green-700"
                                    onClick={handlePhoneLogin}
                                >
                                    Se connecter avec le numéro de téléphone à la place
                                </Button> */}
                                <div className="text-center space-x-2">
                                    {/* <Button
                                        variant="outline"
                                        className="border-[#0067b8] w-full text-[#0067b8] hover:bg-green-50 hover:text-gray-600"
                                        onClick={handleGetStarted}
                                    >
                                        Commencer
                                    </Button> */}
                                    <OnboardingDialogForLogin />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="stayLoggedIn"
                                        checked={stayLoggedIn}
                                        onChange={(e) => setStayLoggedIn(e.target.checked)}
                                        className="rounded border-gray-300 text-[#0067b8] focus:ring-green-500"
                                    />
                                    <label htmlFor="stayLoggedIn" className="text-sm text-gray-600">
                                        Rester connecté
                                    </label>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Right side - QR Code */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center space-y-6"
                    >
                        <div className="bg-white p-8 rounded-lg shadow-lg border">
                            <div
                                className="w-64 h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={handleQRScan}
                            >
                                <div className="text-center">
                                    <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                    <p className="text-sm text-gray-500">Cliquez pour scanner le QR code</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="stayLoggedInQR"
                                checked={stayLoggedIn}
                                onChange={(e) => setStayLoggedIn(e.target.checked)}
                                className="rounded border-gray-300 text-[#0067b8] focus:ring-green-500"
                            />
                            <label htmlFor="stayLoggedInQR" className="text-sm text-gray-600">
                                Rester connecté
                            </label>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="bg-white border-t border-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Card className="text-center p-6 hover:shadow-md transition-shadow">
                                <CardContent className="space-y-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                        <Smartphone className="h-6 w-6 text-[#0067b8]" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Suivez vos conversations</h3>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Card className="text-center p-6 hover:shadow-md transition-shadow">
                                <CardContent className="space-y-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                        <Link className="h-6 w-6 text-[#0067b8]" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Prendre et passer un appel</h3>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Card className="text-center p-6 hover:shadow-md transition-shadow">
                                <CardContent className="space-y-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                        <MessageCircle className="h-6 w-6 text-[#0067b8]" />
                                    </div>
                                    {/* <h3 className="font-semibold text-gray-900">Continuer à discuter pendant que vous multitâchez</h3> */}
                                    <h3 className="font-semibold text-gray-900">Restez maître de vos notifications</h3>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Windows App Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <Card className="p-8">
                            <div className="flex items-center space-x-6">
                                <div className="flex-shrink-0">
                                    <img alt="WhatsApp Windows app interface" className="w-32 h-24 rounded-lg" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Phone-Link-window-with-notifications-RW10JU0?scl=1" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Essayez l'application Windows
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Avec des fonctionnalités supplémentaires comme les appels vocaux et vidéo, vous pouvez envoyer des messages et appeler en même temps pour en faire plus.
                                    </p>
                                    <Button
                                        className="bg-[#0067b8] hover:bg-green-700 text-white"
                                        onClick={handleDownloadApp}
                                    >
                                        <Download className="h-4 w-4 mr-2" />
                                        Télécharger l'application
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-white border-t border-gray-200 py-8">
                <div className='max-w-4xl mx-auto px-6 py-8'>
                    < AccordionFromOrigin />
                </div>
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <Card className="p-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <MessageCircle className="h-6 w-6 text-[#0067b8]" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900">Vous n'avez pas de compte WhatsApp ?</h3>
                                    <p className="text-sm text-gray-600">
                                        Vous devez avoir WhatsApp sur votre téléphone avant de pouvoir vous connecter sur un ordinateur.
                                    </p>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-[#0067b8] text-[#0067b8] hover:bg-green-50"
                                    onClick={handleGetStarted}
                                >
                                    Commencer
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-100 py-6">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sm text-gray-500">
                        Vos messages personnels sont chiffrés de bout en bout sur tous vos appareils.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default LoginPage;