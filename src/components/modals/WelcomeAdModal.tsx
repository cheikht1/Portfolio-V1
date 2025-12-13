import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';

const WelcomeAdModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode } = useProfile();

    useEffect(() => {
        // Open modal after a short delay to ensure page load
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-0">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className={`relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl ${isDarkMode ? 'bg-slate-900 border border-white/10' : 'bg-white'
                            }`}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${isDarkMode
                                ? 'bg-black/20 text-white hover:bg-black/40'
                                : 'bg-white/20 text-gray-900 hover:bg-white/40'
                                }`}
                        >
                            <X size={20} />
                        </button>

                        {/* Ad Content */}
                        <div className="flex flex-col">
                            <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <img
                                    src="/Portfolio-V1/ads/placeholder.png"
                                    alt="Welcome Offer"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6 text-center">
                                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Welcome to my Portfolio!
                                </h3>
                                <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Thank you for visiting. Feel free to explore my projects and experiences.
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors w-full sm:w-auto"
                                >
                                    Explore Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeAdModal;
