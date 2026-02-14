'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Toast from '@/components/ui/Toast';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
  }>({ message: '', type: 'success', isVisible: false });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setToast({
        message: 'Please fix the errors in the form',
        type: 'error',
        isVisible: true,
      });
      return;
    }

    // Mailto fallback
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:Ashushekhar2442@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Show success toast
    setToast({
      message: 'Opening your email client...',
      type: 'success',
      isVisible: true,
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      id="connect"
      className="min-h-screen grid place-items-center py-24 px-4"
      aria-label="Connect"
    >
      <motion.div
        className="w-full max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
        >
          Connect
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 md:p-8"
        >
          <p className="text-[var(--muted)] mb-4 leading-relaxed">
            Open to internships, collabs, and cool problems. DM me or drop a note.
          </p>

          {/* Availability */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[var(--muted)]">
              Available for opportunities
            </span>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex gap-3 flex-wrap mb-8">
            <motion.a
              href="mailto:Ashushekhar2442@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br from-[var(--accent)] via-[#64d2ff] to-[#70a6ff] text-[#051018] font-bold shadow-[0_8px_30px_rgba(124,245,255,.25)]"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: '0 12px 40px rgba(124,245,255,.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-regular fa-envelope"></i>
              Email
            </motion.a>

            <motion.a
              href="https://github.com/Asky03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--glass)] font-bold"
              whileHover={{
                scale: 1.05,
                y: -2,
                borderColor: 'rgba(124,245,255,.6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ashutoshs27/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--glass)] font-bold"
              whileHover={{
                scale: 1.05,
                y: -2,
                borderColor: 'rgba(124,245,255,.6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-brands fa-linkedin-in"></i>
              LinkedIn
            </motion.a>
          </div>

          {/* Contact Form */}
          <div className="border-t border-[var(--border)] pt-6">
            <h3 className="text-lg font-bold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-[var(--bg)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-[var(--border)] focus:border-[rgba(124,245,255,.6)]'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-[var(--bg)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-[var(--border)] focus:border-[rgba(124,245,255,.6)]'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border bg-[var(--bg)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-[var(--border)] focus:border-[rgba(124,245,255,.6)]'
                  }`}
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-[var(--accent)] via-[#64d2ff] to-[#70a6ff] text-[#051018] font-bold shadow-[0_8px_30px_rgba(124,245,255,.25)]"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 12px 40px rgba(124,245,255,.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fa-regular fa-paper-plane"></i>
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />
    </section>
  );
}
