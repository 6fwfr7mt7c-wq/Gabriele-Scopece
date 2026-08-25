import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 max-w-md bg-[#1e2023] border border-[#ffb59d]/50 text-white p-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md"
      >
        <div className="w-8 h-8 rounded-full bg-[#ffb59d]/20 text-[#ffb59d] flex items-center justify-center shrink-0">
          <CheckCircle className="w-5 h-5" />
        </div>
        <p className="text-xs sm:text-sm font-medium text-[#e2e2e6] flex-1">
          {message}
        </p>
        <button
          onClick={onClose}
          className="text-[#a88a81] hover:text-white p-1 rounded-md"
          aria-label="Chiudi notifica"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
