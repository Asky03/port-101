export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    title: 'Certified React Developer',
    issuer: 'Meta',
    date: 'Jan 2024',
    credentialUrl: 'https://www.example.com/cert1',
  },
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2023',
    credentialUrl: 'https://www.example.com/cert2',
  },
  {
    title: 'Google UX Design',
    issuer: 'Google',
    date: 'Nov 2023',
  },
];
