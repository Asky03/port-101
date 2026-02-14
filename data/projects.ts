export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Generative AI' | 'Cloud' | 'Blockchain' | 'Web';
  tags: string[];
  tech: string[];
  codeUrl: string;
  liveUrl?: string;
  whatIBuilt?: string;
  challenges?: string;
  learnings?: string;
}

export const projects: Project[] = [
  {
    id: 'docuai',
    title: 'DocuAi',
    description: 'Using AI model to generate summary info from different files.',
    category: 'Generative AI',
    tags: ['AI', 'NLP', 'Embeddings'],
    tech: ['Python', 'MiniLM (Embeddings)', 'Flan-T5 (LLM)'],
    codeUrl: 'https://github.com/Asky03/GenAimodel',
    liveUrl: '',
    whatIBuilt: 'An AI-powered document summarization tool that processes multiple file formats and generates concise summaries using transformer models.',
    challenges: 'Optimizing embedding generation for large documents while maintaining accuracy.',
    learnings: 'Deep understanding of transformer architectures and efficient vector similarity search.',
  },
  {
    id: 'secure-vault',
    title: 'A Secure Vault',
    description: 'A local storing vault using SHA-256 encryption making it way more secure.',
    category: 'Cloud',
    tags: ['Security', 'Encryption', 'Storage'],
    tech: ['Firebase', 'AES', 'JavaScript'],
    codeUrl: 'https://github.com/Asky03/SCV01',
    liveUrl: '',
    whatIBuilt: 'A secure local storage solution with AES encryption for sensitive data protection.',
    challenges: 'Implementing client-side encryption without compromising performance.',
    learnings: 'Cryptography best practices and secure key management strategies.',
  },
  {
    id: 't3trust',
    title: 'T3TRUST',
    description: 'Micro-credit prototype with trust scoring and a mock ledger.',
    category: 'Blockchain',
    tags: ['DeFi', 'Smart Contracts', 'Credit'],
    tech: ['Hardhat', 'Truffle', 'Node.js'],
    codeUrl: 'https://github.com/Asky03/t3trust',
    liveUrl: '',
    whatIBuilt: 'A decentralized micro-credit platform with algorithmic trust scoring on blockchain.',
    challenges: 'Designing a fair and transparent trust scoring algorithm.',
    learnings: 'Smart contract security patterns and gas optimization techniques.',
  },
  {
    id: 'greet-dapp',
    title: 'Decentralized application (DApp)',
    description: '(DApp) built to store and update a greeting message on the Ethereum blockchain.',
    category: 'Blockchain',
    tags: ['DApp', 'Ethereum', 'Web3'],
    tech: ['Solidity', 'Ethers.js v5', 'MetaMask'],
    codeUrl: 'https://github.com/Asky03/Greet-Dapp',
    liveUrl: '',
    whatIBuilt: 'A simple DApp demonstrating blockchain interaction with smart contracts.',
    challenges: 'Handling wallet connection states and transaction confirmations.',
    learnings: 'Web3 integration patterns and blockchain transaction lifecycle.',
  },
  {
    id: 'kiranawala',
    title: 'Kiranawala',
    description: 'An local Kirana (Grocery manage system) based website for tier3 cities connecting people.',
    category: 'Web',
    tags: ['E-commerce', 'Local Business', 'MERN'],
    tech: ['JavaScript', 'Node.js', 'MongoDB'],
    codeUrl: 'https://github.com/Asky03/Kiranawala-',
    liveUrl: '',
    whatIBuilt: 'A hyperlocal grocery management platform connecting small retailers with customers.',
    challenges: 'Building an intuitive interface for non-tech-savvy users.',
    learnings: 'User-centered design and scalable database architecture.',
  },
];

export const categories = ['All', 'Generative AI', 'Cloud', 'Blockchain', 'Web'] as const;
