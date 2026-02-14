'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-9 text-center border-t border-[var(--border)] bg-black/[0.08] px-4"
    >
      <div className="w-full max-w-[1200px] mx-auto text-[var(--muted)]">
        © {currentYear} Ashutosh Shekhar • All Rights Reserved
      </div>
    </motion.footer>
  );
}
