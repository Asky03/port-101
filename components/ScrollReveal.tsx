import React, { useRef, useState, useEffect } from 'react';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number; // ms
  className?: string;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  className = '',
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setRevealed(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    let observer: IntersectionObserver | null = null;
    observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), delay);
          observer && observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer && observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={
        `${className} transition-all duration-700 ease-out will-change-transform ` +
        (revealed
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none')
      }
      style={prefersReducedMotion() ? {} : { transitionDelay: `${delay}ms` }}
      aria-hidden={!revealed}
      {...rest}
    >
      {children}
    </div>
  );
};
