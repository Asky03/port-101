'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen grid place-items-center pt-24"
      aria-label="Hero"
    >
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-[var(--border)] rounded-full text-[var(--muted)] mb-4 text-3xl font-bold tracking-wide"
            >
              Ashutosh Shekhar
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3"
            >
              I design &amp; build.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[var(--muted)] text-base md:text-lg leading-relaxed mb-5"
            >
              Working on Gen-AI models and exploring system design architecture.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-3.5 flex-wrap"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl border-transparent bg-gradient-to-br from-[var(--accent)] via-[#64d2ff] to-[#70a6ff] text-[#051018] font-bold shadow-[0_8px_30px_rgba(124,245,255,.25)]"
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: '0 12px 40px rgba(124,245,255,.4)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="fa-solid fa-bolt"></i>
                See Projects
              </motion.a>

              <motion.a
                href="#connect"
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--glass)] font-bold"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  borderColor: 'rgba(124,245,255,.6)',
                  boxShadow: '0 8px 24px rgba(124,245,255,.2)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="fa-regular fa-comment-dots"></i>
                Connect
              </motion.a>
            </motion.div>
          </div>

          {/* Right Feature Card */}
          <motion.aside
            variants={itemVariants}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            aria-label="Highlights"
          >
            <strong className="block mb-2.5">Highlights</strong>
            <ul className="list-disc pl-4.5 space-y-1">
              <li className="text-[var(--muted)] leading-relaxed">
                Working on Gen-AI models
              </li>
              <li className="text-[var(--muted)] leading-relaxed">
                Exploring system design &amp; architecture
              </li>
            </ul>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
