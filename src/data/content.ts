export const profile = {
  name: 'Rasheedah Matyeni',
  firstName: 'Rasheedah',
  title: 'IT Intern',
  tagline: 'IT Professional | AI & Software Development Enthusiast',
  summary:
    'A motivated technology professional with a growing passion for software development, artificial intelligence, and digital innovation. Through academic excellence and hands-on internship experience, I continuously develop my skills in AI tools, software development, and modern technologies — turning ideas into practical, meaningful solutions.',
  email: 'rasheedahmatyeni6@gmail.com',
  linkedin: 'linkedin.com/in/rasheedah-matyeni',
  linkedinUrl: 'https://linkedin.com/in/rasheedah-matyeni',
  location: 'Eastern Cape, South Africa',
};

export const education = [
  {
    period: '2020 – 2022',
    title: 'National Diploma in Information Technology Management',
    institution: 'IIE Rosebank College',
    description:
      'Built foundational knowledge in IT management, software principles, systems thinking, and the practical application of technology to solve business problems.',
  },
  {
    period: '2024',
    title: 'Advanced Diploma in Information Resource Management',
    institution: 'UNISA',
    description:
      'Advanced study of information systems, resource management, and the strategic role of technology in modern organisations — deepening both technical and analytical capabilities.',
  },
];

export const achievements = [
  {
    title: '3rd ELIDZ Hackathon — Participant',
    context: 'Health Sector · Rural Emergency Response App',
    description:
      'Competed in the third edition of the East London Industrial Development Zone Hackathon, contributing research-led ideation toward an app that improves rural emergency access.',
  },
  {
    title: 'AI Automated Ticketing System — Current Participant',
    context: 'CAPACITI GQ',
    description:
      'An active team member building an AI-powered ticketing system that auto-groups support tickets, detects urgency and tone, and surfaces per-department analytics.',
  },
];

export const experience = {
  role: 'IT Intern',
  company: 'CAPACITI GQ',
  period: 'April 2026 — Present',
  duration: '≈ 3 months',
  points: [
    'Collaborating with team members to develop technology solutions that address real business needs.',
    'Participating in software development projects using modern, AI-powered platforms and tools.',
    'Improving problem-solving, communication, and teamwork skills within a professional environment.',
    'Learning and applying industry best practices across technology and software development.',
  ],
};

export type WorkHistoryEntry = {
  id: string;
  role: string;
  organisation: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const workHistory: WorkHistoryEntry[] = [
  {
    id: 'personal-assistant',
    role: 'Personal Assistant',
    organisation: 'Fredericks Inc',
    location: 'Gqeberha',
    period: '2025',
    summary:
      'Provided executive-level administrative support to the Managing Director, Attorney, Notary Public & Conveyancer in a fast-paced legal environment.',
    highlights: [
      'Managed digital correspondence, scheduling, and document coordination using office productivity tools and software.',
      'Maintained and organised legal documentation and digital filing systems, ensuring accuracy and confidentiality.',
      'Used technology to streamline communication workflows between the MD and external stakeholders.',
      'Developed strong attention to detail, time management, and professional communication skills in a high-pressure, document-heavy environment.',
    ],
  },
  {
    id: 'au-pair',
    role: 'Au Pair',
    organisation: 'Private Household',
    location: 'Virginia, USA',
    period: '2023 – 2025',
    summary:
      'Lived and worked in the United States for two years, providing childcare and educational support in a professional household environment.',
    highlights: [
      'Used digital platforms and educational technology tools to support children\u2019s learning and development.',
      'Managed scheduling, communication, and coordination across time zones using productivity and communication apps.',
      'Developed cross-cultural communication, adaptability, and problem-solving skills — key competencies in global tech teams.',
      'Demonstrated reliability, initiative, and the ability to work independently in an international environment.',
    ],
  },
  {
    id: 'brand-ambassador',
    role: 'Brand Ambassador',
    organisation: 'IIE Rosebank College',
    location: 'Eastern Cape, South Africa',
    period: 'Early 2023',
    summary:
      'Represented IIE Rosebank College as an official Brand Ambassador, promoting the institution\u2019s academic offerings to prospective students.',
    highlights: [
      'Used social media platforms and digital communication tools to engage and inform prospective students.',
      'Communicated the value of technology and IT programmes to diverse audiences, building public speaking and digital marketing skills.',
      'Gained hands-on experience in digital brand representation, content sharing, and audience engagement.',
      'Strengthened ability to communicate complex information clearly — a skill directly transferable to tech consulting and client-facing roles in IT.',
    ],
  },
];

export type Project = {
  id: string;
  emoji: string;
  name: string;
  subtitle: string;
  sector?: string;
  focus?: string;
  problem?: string;
  solution: string;
  role: string;
  tools?: string;
  outcome?: string;
  status?: string;
  link?: { label: string; url: string };
};

export const projects: Project[] = [
  {
    id: 'rural-emergency',
    emoji: '🚑',
    name: 'Rural Emergency Response App',
    subtitle: 'ELIDZ Hackathon — 3rd Edition',
    sector: 'Health',
    focus: 'Rural emergency access',
    solution:
      'A mobile app that allows rural users to request ambulances, track emergency services in real time, and share their exact location with paramedics — closing the gap between a crisis and care.',
    role: 'Researcher — led solution ideation through research and published articles.',
    outcome: 'Competed in the ELIDZ Hackathon.',
  },
  {
    id: 'npo-networking',
    emoji: '🌐',
    name: 'NPO Networking Solution',
    subtitle: 'Final Year Project',
    problem:
      'Masinyusane Development Organization faced faulty routers, poor connectivity across the building, and printer access issues that disrupted day-to-day work.',
    solution:
      'Proposed and designed a structured networking solution to resolve connectivity and printing problems, improving reliability for staff and the communities they serve.',
    role: 'Final year project team member.',
  },
  {
    id: 'article-analyzer',
    emoji: '📰',
    name: 'Article Analyzer',
    subtitle: 'AI Engineering stream · CAPACITI GQ Internship',
    focus: 'Article analysis with local ML & cloud LLMs',
    solution:
      'An AI application that analyzes articles by combining on-device machine learning models with cloud-based large language models, delivering insights such as summarization, sentiment, and key-topic extraction from written content.',
    role: 'Developer — built as part of the AI Engineering stream during my CAPACITI GQ internship.',
    tools: 'Streamlit · Python · Local ML models · Cloud LLMs',
    status: 'Deployed',
    link: {
      label: 'Article Analyzer · Streamlit',
      url: 'https://article-analyzer0.streamlit.app/',
    },
  },
  {
    id: 'ai-ticketing',
    emoji: '🎫',
    name: 'AI Automated Ticketing System',
    subtitle: 'Current · CAPACITI GQ',
    solution:
      'An AI-powered system that automatically groups incoming support tickets into the appropriate departments, detects the urgency and tone of each ticket, and provides per-department analytics to support decision-making.',
    role: 'Team member / developer.',
    tools: 'Lovable (AI-powered development platform)',
    status: 'In progress',
    link: {
      label: 'SmartTickets — AI-Powered Ticketing',
      url: 'https://clever-ticket-tamer.lovable.app/login',
    },
  },
];

export type Certification = {
  name: string;
  issuer?: string;
  url?: string;
  pdf?: string;
  logo?: 'coursera';
};

export type CertificationGroup = {
  id: string;
  title: string;
  description: string;
  certifications: Certification[];
};

export const certificationGroups: CertificationGroup[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description:
      'Foundations and advanced coursework across the machine learning landscape — from first principles to large language models.',
    certifications: [
      { name: 'Google AI Essentials Specialization', issuer: 'Google', logo: 'coursera', pdf: '/certificates/Google_AI_Essentials.pdf' },
      { name: 'Generative AI with Large Language Models', issuer: 'Coursera', logo: 'coursera', pdf: '/certificates/Generative_AI_with_Large_Language_Models.pdf' },
      { name: 'Introduction to Generative AI', logo: 'coursera', pdf: '/certificates/Introduction_to_Generative_AI.pdf' },
      { name: 'Generative AI: Prompt Engineering Basics', logo: 'coursera', pdf: '/certificates/Generative_AI_Prompt_Engineering_Basics.pdf' },
      { name: 'Advanced Learning Algorithms', issuer: 'DeepLearning.AI', logo: 'coursera', pdf: '/certificates/Advanced_Learning_Algorithms.pdf' },
      { name: 'Supervised Machine Learning: Regression and Classification', issuer: 'Stanford / DeepLearning.AI', logo: 'coursera', pdf: '/certificates/Supervised_Machine_Learning_Regression_and_Classification.pdf' },
      { name: 'Unsupervised Learning, Recommenders, Reinforcement Learning', issuer: 'Stanford / DeepLearning.AI', logo: 'coursera', pdf: '/certificates/Unsupervised_Learning,_Recommenders,_Reinforcement_Learning.pdf' },
      { name: 'Introduction to Artificial Intelligence (AI)', logo: 'coursera', pdf: '/certificates/Introduction_to_Artificial_Intelligence_(AI).pdf' },
      { name: 'Introduction to AI', logo: 'coursera', pdf: '/certificates/Introduction_to_AI.pdf' },
      { name: 'AI For Everyone', issuer: 'DeepLearning.AI', logo: 'coursera', pdf: '/certificates/AI_For_Everyone.pdf' },
      { name: 'AI Essentials', logo: 'coursera', pdf: '/certificates/AI_Essentials.pdf' },
    ],
  },
  {
    id: 'prompt-ai-tools',
    title: 'Prompt Engineering & AI Tools',
    description:
      'Crafting effective prompts and using AI tools deliberately to extend — not replace — human judgement.',
    certifications: [
      { name: 'AI Foundations: Prompt Engineering with ChatGPT', logo: 'coursera', pdf: '/certificates/AI_Foundations_Prompt_Engineering_with_ChatGPT.pdf' },
      { name: 'Generative AI: Prompt Engineering Basics', logo: 'coursera', pdf: '/certificates/Generative_AI_Prompt_Engineering_Basics.pdf' },
      { name: 'Discover the Art of Prompting', logo: 'coursera', pdf: '/certificates/Discover_the_Art_of_Prompting.pdf' },
      { name: 'Maximize Productivity With AI Tools', logo: 'coursera', pdf: '/certificates/Maximize_Productivity_With_AI_Tools.pdf' },
      { name: 'Stay Ahead of the AI Curve', logo: 'coursera', pdf: '/certificates/Stay_Ahead_of_the_AI_Curve.pdf' },
      { name: 'Use AI Responsibly', logo: 'coursera', pdf: '/certificates/Use_AI_Responsibly.pdf' },
    ],
  },
  {
    id: 'data-python',
    title: 'Data Science & Python',
    description:
      'Hands-on programming for data analysis, manipulation, and the foundations of AI development.',
    certifications: [
      { name: 'Python for Data Science, AI & Development', issuer: 'IBM', logo: 'coursera', pdf: '/certificates/Python_for_Data_Science,_AI_&_Development.pdf' },
    ],
  },
  {
    id: 'ethics-leadership',
    title: 'Ethics & Leadership',
    description:
      'Frameworks for building technology responsibly and leading teams with integrity.',
    certifications: [
      { name: 'Trustworthy AI: Managing Bias, Ethics and Accountability', logo: 'coursera', pdf: '/certificates/Trustworthy_AI_Managing_Bias_Ethics_and_Accountability.pdf' },
      { name: 'Introduction to Responsible AI', logo: 'coursera', pdf: '/certificates/Introduction_to_Responsible_AI.pdf' },
      { name: 'Leading with Impact: Team Dynamics, Strategy and Ethics', logo: 'coursera' },
    ],
  },
  {
    id: 'design-creative',
    title: 'Design & Creative',
    description:
      'Visual communication and branding coursework — strengthening the creative eye that complements technical work.',
    certifications: [
      { name: 'Exploring Digital Photography', issuer: 'Hudson Community College' },
      { name: 'Graphic Design for Branding', issuer: 'Hudson Community College' },
    ],
  },
  {
    id: 'professional-soft-skills',
    title: 'Professional & Soft Skills',
    description:
      'Beyond technical skills, I have invested in developing the professional and interpersonal competencies that make a well-rounded technology professional.',
    certifications: [
      { name: 'Write Professional Emails in English', issuer: 'Coursera', logo: 'coursera', url: '#' },
      { name: 'Verbal Communications and Presentation Skills', issuer: 'Coursera', logo: 'coursera', url: '#' },
      { name: 'Active Listening: Enhancing Communication Skills', issuer: 'Coursera', logo: 'coursera', url: '#' },
      { name: 'Developing Interpersonal Skills', issuer: 'Coursera', logo: 'coursera', url: '#' },
      { name: 'Work Smarter, Not Harder: Time Management for Personal & Professional Productivity', issuer: 'Coursera', logo: 'coursera', url: '#' },
      { name: 'Emotional Intelligence in the Workplace', issuer: 'Coursera', logo: 'coursera', url: '#' },
      { name: 'Finding Your Professional Voice: Confidence & Impact', issuer: 'Coursera', logo: 'coursera', url: '#' },
      { name: 'Introduction to Personal Branding', issuer: 'Coursera', logo: 'coursera', url: '#' },
      { name: 'Leading with Impact: Team Dynamics, Strategy and Ethics', issuer: 'Coursera', logo: 'coursera', url: '#' },
    ],
  },
];
