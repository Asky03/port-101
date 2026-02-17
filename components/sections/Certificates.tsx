import React from 'react';
import { certificates } from '@/data/certificates';

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-4 min-h-[60vh]">
      <div className="w-full max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-3 hover:-translate-y-1"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <div className="text-[var(--muted)] text-sm mb-2">{cert.issuer}</div>
                <div className="text-xs text-[var(--muted)] mb-3">{cert.date}</div>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-sm hover:bg-[var(--accent)]/10 transition-colors"
                >
                  View
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
