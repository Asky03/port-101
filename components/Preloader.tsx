'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if preloader was already shown
    const hasSeenPreloader = sessionStorage.getItem('seenPreloader');
    
    if (hasSeenPreloader) {
      setIsVisible(false);
      return;
    }

    // Simulate loading progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.max(1, (90 - currentProgress) * 0.06);
      if (currentProgress > 90) currentProgress = 90;
      setProgress(currentProgress);
      
      if (currentProgress >= 90) {
        clearInterval(interval);
      }
    }, 50);

    // Complete loading
    const completeLoading = () => {
      let finalProgress = progress;
      const finalInterval = setInterval(() => {
        finalProgress += (100 - finalProgress) * 0.18;
        if (finalProgress > 99.5) finalProgress = 100;
        setProgress(finalProgress);
        
        if (finalProgress >= 100) {
          clearInterval(finalInterval);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('seenPreloader', '1');
          }, 200);
        }
      }, 50);
    };

    // Safety timeout
    const timeout = setTimeout(completeLoading, 2500);
    
    // Complete on window load
    window.addEventListener('load', completeLoading);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener('load', completeLoading);
    };
  }, [progress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] grid place-items-center"
          style={{
            background:
              'radial-gradient(1000px 600px at 70% -10%, #18205a 0%, transparent 60%), linear-gradient(180deg, #0b0e1a 0%, #0f1430 60%, #060811 100%)',
          }}
        >
          <div className="w-[min(520px,92%)] text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center gap-2.5 px-3.5 py-2.5 border border-[var(--border)] rounded-xl bg-[var(--glass)] font-extrabold tracking-wide text-lg md:text-xl mb-4"
            >
              <i className="fa-solid fa-laptop-code text-[var(--accent)]"></i>
              <span>Ashu</span>
            </motion.div>

            {/* Traffic lanes */}
            <div className="grid gap-1.5 my-4 mb-3">
              {[0, 0.25, 0.5].map((delay, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded-full bg-white/[0.06] relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '400%' }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="h-2.5 rounded-full border border-[var(--border)] bg-white/[0.04] overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--accent)] via-[#64d2ff] to-[#70a6ff]"
                style={{
                  boxShadow: '0 0 24px rgba(124,245,255,.35) inset',
                  width: `${progress}%`,
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              />
            </div>

            {/* Meta text */}
            <div className="mt-2.5 text-[var(--muted)] text-sm">
              <span>{Math.round(progress)}%</span> • routing traffic…
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
