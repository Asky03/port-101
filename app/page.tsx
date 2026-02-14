import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Connect from '@/components/sections/Connect';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Ashutosh Shekhar — Working on Gen-AI models and exploring system design architecture. Portfolio of projects in Generative AI, Cloud, Blockchain, and Web.',
};

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ashutosh Shekhar',
  url: 'https://ashutoshshekhar.vercel.app',
  sameAs: [
    'https://github.com/Asky03',
    'https://www.linkedin.com/in/ashutoshs27/',
  ],
  jobTitle: 'Full Stack Developer',
  description:
    'Working on Gen-AI models and exploring system design architecture',
  knowsAbout: [
    'Generative AI',
    'Cloud Computing',
    'Blockchain',
    'Web Development',
    'System Design',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ashutosh Shekhar Portfolio',
  url: 'https://ashutoshshekhar.vercel.app',
  description:
    'Portfolio showcasing projects in Generative AI, Cloud Computing, Blockchain, and Web Development',
  author: {
    '@type': 'Person',
    name: 'Ashutosh Shekhar',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <Projects />
      <Connect />
    </>
  );
}
