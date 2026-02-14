'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[3000] max-w-md"
        >
          <div
            className={`flex items-center gap-3 px-5 py-4 rounded-xl border shadow-2xl backdrop-blur-xl ${
              type === 'success'
                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}
          >
            <i
              className={`text-xl ${
                type === 'success' ? 'fa-solid fa-check-circle' : 'fa-solid fa-exclamation-circle'
              }`}
            ></i>
            <p className="flex-1 font-medium">{message}</p>
            <motion.button
              onClick={onClose}
              className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close notification"
            >
              <i className="fa-solid fa-times"></i>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
