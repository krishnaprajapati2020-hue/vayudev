import { Project, Experience, Education, SkillCategory, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Krishna Prajapat',
  shortName: 'KP',
  title: 'Senior WordPress Developer & QA Lead',
  role: 'Quality Assurance Lead & Senior WordPress Developer',
  location: 'Mumbai, India',
  email: 'krishnaprajapati2020@gmail.com',
  altEmail: 'krishnaprajapati2020@gmail.com',
  phone: '+91 7304821109',
  portfolioUrl: 'https://vayudev.in',
  availability: 'Senior WordPress Developer & QA Lead',
  bio: "Creative frontend engineer and Senior WordPress Developer with 3+ years of experience transforming complex business goals into intuitive, high-speed, and zero-defect web solutions across 120+ client accounts.",
  coreExpertise: [
    'Custom WordPress Theme & Plugin Customization (Elementor Pro, ACF Pro, Gutenberg)',
    'Front-End Engineering (HTML5, SCSS, JavaScript ES6+, Responsive Layouts)',
    'Performance & Core Web Vitals Optimization (Website Speed, SEO, Accessibility)',
    'Agency QA Standards & Zero-Defect Delivery (ZiFlow Defect Elimination)',
    'Full-Stack Solutions (WooCommerce, Custom Post Types, REST APIs, Android Apps)'
  ],
  stats: [
    { label: 'Live Client Accounts', value: '120+' },
    { label: 'Agency Experience', value: '3+ Yrs' },
    { label: 'QA Recognition', value: 'Rising Star' },
  ],
  socials: [
    { name: 'Portfolio', url: 'https://vayudev.in', handle: 'vayudev.in' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/kri5hna', handle: 'in/kri5hna' },
    { name: 'Email', url: 'mailto:krishnaprajapati2020@gmail.com', handle: 'krishnaprajapati2020@gmail.com' },
    { name: 'Phone', url: 'tel:+917304821109', handle: '+91 7304821109' },
  ],
  images: {
    aboutCutout: '/assets/profile-cutout.png',
    portraitPrimary: '/assets/exp%20image.webp',
    portraitAlt: '/assets/exp%20image.webp',
    portraitCreative: '/assets/exp%20image.webp',
    heroBase: '/assets/hero-base-recolored.png',
    heroReveal: '/assets/hero-reveal-recolored.png'
  }
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    period: 'Jan 2026 – Present',
    role: 'Quality Assurance Lead & Senior WordPress Developer',
    company: 'SAVIT Interactive (Agency Partner to Patient NEWS, Canada)',
    location: 'Mumbai, India',
    description: 'Managing WordPress website delivery and quality across 120+ live client websites for a premier North American digital marketing agency partner.',
    highlights: [
      'Design, develop, and maintain WordPress-based websites for 120+ North American (US & Canada) client accounts, building custom themes and plugin functionality per client requirements.',
      'Implement responsive layouts and ensure cross-browser compatibility across every build; optimize sites for performance, accessibility, and SEO.',
      'Collaborate closely with designers, content teams, and account managers to translate business requirements into functional, user-friendly websites.',
      'Troubleshoot issues, manage updates, and follow security best practices across the client portfolio.',
      'Overhauled agency-wide QA standards, reducing pre-launch client review comments on ZiFlow from 150–180 down to near-zero defects; nominated twice, then won "Rising Star of the Quarter" within first 6 months.'
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'Elementor Pro', 'ACF Pro', 'ZiFlow QA', 'Core Web Vitals', 'Git']
  },
  {
    id: 'exp-2',
    period: 'Oct 2024 – Nov 2025',
    role: 'Senior Web Developer & Client Solutions Lead',
    company: 'Cosmic Solutions',
    location: 'Goa, India (Remote)',
    description: 'Designed and developed full-lifecycle WordPress and WooCommerce platforms for clients across travel/tourism, hospitality, retail, and education sectors.',
    highlights: [
      'Designed and developed WordPress and WooCommerce websites end-to-end for clients across travel/tourism, hospitality, retail, and education sectors.',
      'Built a booking-platform website (MyTourCapital) with custom post types and database-driven booking logic; independently developed and published the companion Android app on the Google Play Store.',
      'Used Git for version control and worked directly with clients on requirements and functionality.',
      'Architected seamless checkout funnels, payment gateways, and custom responsive templates.'
    ],
    technologies: ['WordPress', 'WooCommerce', 'PHP/MySQL', 'Custom Post Types', 'Android App Dev', 'Git', 'REST APIs']
  },
  {
    id: 'exp-3',
    period: 'Jul 2023 – Aug 2024',
    role: 'WordPress Developer',
    company: 'Synovative (Digital Marketing Agency)',
    location: 'Mumbai, India',
    description: 'Designed and developed high-performing WordPress websites and landing pages for real estate builder clients in a fast-paced agency setting.',
    highlights: [
      'Designed and developed WordPress websites for real estate builder clients in an agency environment, collaborating with a content and design team on property listing pages and marketing landing pages.',
      'Built high-converting, SEO-optimized landing pages, driving a 70% increase in market reach and lead generation compared to offline channels.',
      'Implemented mobile-first responsive architecture and integrated lead capture systems with instant email and CRM notifications.'
    ],
    technologies: ['WordPress', 'HTML5/SCSS', 'JavaScript', 'SEO Optimization', 'Lead Capture Funnels', 'Cross-Browser']
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: 'edu-1',
    period: '2021 – 2023',
    degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
    institution: 'University of Mumbai',
    description: 'Built a solid engineering foundation in software development, database systems, web technologies, and systems architecture.',
    honors: 'Graduated'
  },
  {
    id: 'edu-2',
    period: 'Pursuing',
    degree: 'Master of Business Administration (MBA)',
    institution: 'Strategic Technology Management',
    description: 'Specializing in technology leadership, business systems analysis, and bridging software engineering execution with business ROI.',
    honors: '2026'
  },
  {
    id: 'edu-3',
    period: '2026',
    degree: 'Professional Frontend & QA Engineering',
    institution: 'SAVIT Interactive',
    description: 'Advanced technical mastery and QA engineering expertise acquired through real-world agency execution across 120+ live client websites, agency-grade QA workflows (ZiFlow), and Core Web Vitals optimization.',
    honors: 'Hands-on Agency Mastery'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'wordpress',
    name: 'WordPress Development',
    iconName: 'Layout',
    description: '3+ years crafting custom themes, tailored plugins, and high-performance CMS builds.',
    skills: [
      { name: 'Custom Theme & Plugin Customization', level: 96, experience: '3+ yrs', isPrimary: true },
      { name: 'Elementor Pro & WPBakery', level: 98, experience: '3+ yrs', isPrimary: true },
      { name: 'ACF Pro (Advanced Custom Fields)', level: 95, experience: '3+ yrs', isPrimary: true },
      { name: 'Gutenberg Blocks & Full Site Editing', level: 90, experience: '2+ yrs', isPrimary: true },
      { name: 'WooCommerce & Store Solutions', level: 92, experience: '3+ yrs', isPrimary: true },
      { name: 'WordPress Hooks, Filters & CPTs', level: 94, experience: '3+ yrs', isPrimary: true },
    ]
  },
  {
    id: 'frontend',
    name: 'Front-End Engineering',
    iconName: 'Palette',
    description: 'Clean semantic markup, pixel-perfect responsive layouts, and cross-browser consistency.',
    skills: [
      { name: 'HTML5 & CSS3 / SCSS', level: 96, experience: '3+ yrs', isPrimary: true },
      { name: 'JavaScript (ES6+) & Modern DOM', level: 90, experience: '3+ yrs', isPrimary: true },
      { name: 'jQuery & Interactive Scripts', level: 94, experience: '3+ yrs', isPrimary: true },
      { name: 'Responsive Web Design (Mobile-First)', level: 98, experience: '3+ yrs', isPrimary: true },
      { name: 'Cross-Browser Compatibility (Desktop/Tablet/Mobile)', level: 97, experience: '3+ yrs', isPrimary: true },
    ]
  },
  {
    id: 'backend',
    name: 'Back-End & Database',
    iconName: 'Server',
    description: 'Server-side logic, custom database queries, and third-party API connectivity.',
    skills: [
      { name: 'PHP Development', level: 92, experience: '3+ yrs', isPrimary: true },
      { name: 'MySQL & Database Architectures', level: 88, experience: '3+ yrs', isPrimary: true },
      { name: 'REST API & Third-Party Integrations', level: 89, experience: '3+ yrs', isPrimary: true },
      { name: 'Booking Logic & Database Post Types', level: 91, experience: '2+ yrs' },
      { name: 'Companion Android App Publishing', level: 85, experience: '2+ yrs' },
    ]
  },
  {
    id: 'qa-security',
    name: 'QA, SEO & Security Hardening',
    iconName: 'Cpu',
    description: 'Overhauling QA workflows, securing client sites, and maximizing search engine visibility.',
    skills: [
      { name: 'Quality Assurance & ZiFlow Workflows', level: 99, experience: '3+ yrs', isPrimary: true },
      { name: 'Core Web Vitals & Speed Optimization', level: 95, experience: '3+ yrs', isPrimary: true },
      { name: 'On-Page SEO & Accessibility Best Practices', level: 94, experience: '3+ yrs', isPrimary: true },
      { name: 'Website Security & Wordfence Hardening', level: 92, experience: '3+ yrs', isPrimary: true },
      { name: 'SSL Configuration & Security Auditing', level: 90, experience: '3+ yrs' },
      { name: 'Git Version Control & Agency Workflows', level: 93, experience: '3+ yrs', isPrimary: true },
      { name: 'AI-Assisted Dev (ChatGPT, Cursor, Claude)', level: 95, experience: '2+ yrs' },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    orderLabel: 'First',
    title: 'VILLAGE GREEN DENTAL CENTER',
    subtitle: 'Premier Dental Practice Portal & Zero-Defect WordPress QA',
    category: 'WordPress',
    description: 'High-performance, patient-first dental clinic web portal engineered with custom Elementor Pro, ACF Pro structures, online appointment workflows, Lifetime Smile Protection showcase, and zero-defect QA signoff.',
    longDescription: 'Engineered for Village Green Dental Center (serving the Aurora & Naperville, IL area since 1983) under SAVIT Interactive and Patient NEWS Network. The site serves as the digital front door for comprehensive family and cosmetic dentistry, featuring custom appointment scheduling integrations, interactive patient education modules, Lifetime Smile Protection program details, and strict HIPAA-compliant contact forms. As QA Lead and Senior WordPress Developer, I directed end-to-end theme development, responsive layouts across 100% of device viewports, Core Web Vitals optimization, Wordfence security hardening, and rigorous ZiFlow zero-defect signoff.',
    client: 'Village Green Dental Center (Aurora, IL) / Patient NEWS',
    year: '2026 – Present',
    role: 'Quality Assurance Lead & Senior WordPress Developer',
    deliverables: [
      'Bespoke WordPress theme & Elementor Pro / ACF Pro component architecture',
      'Custom online appointment scheduling funnel & HIPAA-compliant inquiry handling',
      'Lifetime Smile Protection program & cosmetic smile makeover galleries',
      'Core Web Vitals optimization achieving 98+ Google PageSpeed scores',
      'Rigorous ZiFlow QA protocol eliminating pre-launch review comments down to zero'
    ],
    metrics: [
      { label: 'ZiFlow QA Signoff', value: '0 Defect' },
      { label: 'Core Web Vitals', value: '98/100' },
      { label: 'Patient Inquiries', value: '+68%' },
      { label: 'Mobile Responsive', value: '100%' }
    ],
    tags: ['WordPress', 'PHP', 'ACF Pro', 'Elementor Pro', 'Core Web Vitals', 'ZiFlow QA', 'Healthcare SEO'],
    liveUrl: 'https://villagegreennb.wpenginepowered.com/',
    githubUrl: 'https://linkedin.com/in/kri5hna',
    images: {
      hero: '/assets/portfolio/village green dental/home.png',
      gallery: [
        '/assets/portfolio/village green dental/about doctors.png',
        '/assets/portfolio/village green dental/location page.png',
        '/assets/portfolio/village green dental/SA page.png'
      ]
    }
  },
  {
    id: 'project-4',
    orderLabel: 'Second',
    title: 'EVERGREEN DENTAL CARE',
    subtitle: 'Holistic Dental Practice & Airway Sleep Support Portal',
    category: 'WordPress',
    description: 'Bespoke healthcare practice web experience featuring specialized airway sleep dentistry, tongue-tie release workflows, doctor bios, and zero-defect QA signoff.',
    longDescription: 'Engineered for Evergreen Dental Care under SAVIT Interactive and Patient NEWS Network. The site showcases specialized airway and pediatric sleep support treatments, tongue-tie release, and comprehensive restorative care. Implemented with custom Gutenberg/Elementor Pro modules, responsive design, fast page load speeds, and strict agency QA protocols.',
    client: 'Evergreen Dental Care / Patient NEWS Network',
    year: '2026',
    role: 'Senior WordPress Developer & QA Lead',
    deliverables: [
      'Custom WordPress architecture & Elementor Pro styling',
      'Meet Our Dentists specialized doctor bio profiles and philosophy',
      'Airway sleep support & infant tongue-tie release patient information pages',
      'Core Web Vitals tuning and multi-device responsive verification'
    ],
    metrics: [
      { label: 'QA Defect Rate', value: '0 Defect' },
      { label: 'PageSpeed Score', value: '97/100' },
      { label: 'Mobile Optimization', value: '100%' },
      { label: 'Patient Trust', value: '5.0 ★' }
    ],
    tags: ['WordPress', 'PHP', 'Elementor Pro', 'Healthcare UX', 'ZiFlow QA', 'Responsive Design'],
    liveUrl: 'https://evergreendcstg.wpenginepowered.com/',
    githubUrl: 'https://linkedin.com/in/kri5hna',
    images: {
      hero: '/assets/portfolio/evergreen dental/home.png',
      gallery: [
        '/assets/portfolio/evergreen dental/about doctor.png',
        '/assets/portfolio/evergreen dental/page 4.png'
      ]
    }
  },
  {
    id: 'project-3',
    orderLabel: 'Third',
    title: 'REALTECH & REAL ESTATE PORTALS',
    subtitle: 'High-Converting Landing Pages & Property Listings',
    category: 'WordPress',
    description: 'High-converting, SEO-optimized landing pages and real estate developer portals that increased client market reach and digital lead generation by 70%.',
    longDescription: 'Engineered at Synovative for major builder clients including Realtech Developers, Nakshatra Aastha, and A2Z Project Management. Focused on high-speed property galleries, interactive floor plans, localized SEO keywords, and high-conversion lead capture funnels that substantially outperformed offline marketing channels.',
    client: 'Realtech Developers & Synovative Agency Clients',
    year: '2023 – 2024',
    role: 'WordPress Developer',
    deliverables: [
      'High-converting property listing pages and floorplan viewers',
      'SEO-optimized landing pages driving 70% increase in lead generation',
      'Lead capture forms with automated validation and CRM forwarding',
      'Responsive testing ensuring 100% fidelity on all Android & iOS devices'
    ],
    metrics: [
      { label: 'Lead Generation', value: '+70%' },
      { label: 'Bounce Rate Drop', value: '-35%' },
      { label: 'Mobile Traffic', value: '82%' },
      { label: 'Load Speed', value: '< 1.2s' }
    ],
    tags: ['WordPress', 'HTML5/SCSS', 'JavaScript', 'Elementor', 'SEO Optimization', 'Lead Capture'],
    liveUrl: 'https://realtechdevelopers.com/',
    githubUrl: 'https://linkedin.com/in/kri5hna',
    images: {
      hero: '/assets/portfolio/realtech developers/home page.png',
      gallery: []
    }
  },
  {
    id: 'project-5',
    orderLabel: 'Fourth',
    title: 'METROPOLIS DENTAL',
    subtitle: 'Cosmetic & Restorative Dentistry High-Converting Landing',
    category: 'Landing Page',
    description: 'Modern, high-conversion landing page and practice portal built with custom Elementor Pro modules, responsive speed optimization, and zero-defect QA signoff.',
    longDescription: 'Developed under SAVIT Interactive and Patient NEWS Network for Metropolis Dental. Focused on highlighting cosmetic smile makeovers, dental implants, Invisalign, and rapid new patient booking. Rigorously tested across all devices with 100% responsive fidelity and sub-second load times.',
    client: 'Metropolis Dental / Patient NEWS Network',
    year: '2026',
    role: 'Senior WordPress Developer & QA Lead',
    deliverables: [
      'High-converting dental marketing landing page',
      'Elementor Pro bespoke layouts & brand styling',
      'Appointment request funnel with automated confirmation',
      'Mobile-first performance and Core Web Vitals audit'
    ],
    metrics: [
      { label: 'QA Signoff', value: '0 Defect' },
      { label: 'Page Speed', value: '98/100' },
      { label: 'Mobile Score', value: '100%' },
      { label: 'Conversion', value: '+55%' }
    ],
    tags: ['WordPress', 'PHP', 'Elementor Pro', 'Healthcare SEO', 'Lead Generation', 'ZiFlow QA'],
    liveUrl: 'https://metropolisden.wpenginepowered.com/',
    githubUrl: 'https://linkedin.com/in/kri5hna',
    images: {
      hero: '/assets/portfolio/metropolice dental landing page/single page.png',
      gallery: []
    }
  },
  {
    id: 'project-6',
    orderLabel: 'Fifth',
    title: 'EVERYONE BY ONE DENTAL',
    subtitle: 'Cleaning & Comprehensive Exam Special Patient Portal',
    category: 'Landing Page',
    description: 'Targeted dental promotion and preventive care landing page with instant voucher redemption, new patient exam workflow, and zero-defect QA.',
    longDescription: 'Engineered for Everyone By One Dental as an agency-grade high-impact patient acquisition landing page. Features special new-patient cleaning & exam promotion, trust signals, doctor credentials, and an streamlined appointment booking workflow.',
    client: 'Everyone By One / Patient NEWS Network',
    year: '2026',
    role: 'Senior WordPress Developer & QA Lead',
    deliverables: [
      'Special cleaning & examination campaign landing page',
      'High-converting mobile booking form',
      'HIPAA-compliant patient inquiry capture',
      'Zero-defect ZiFlow quality assurance'
    ],
    metrics: [
      { label: 'New Patients', value: '+74%' },
      { label: 'Page Speed', value: '99/100' },
      { label: 'Responsive', value: '100%' },
      { label: 'QA Defects', value: '0' }
    ],
    tags: ['WordPress', 'PHP', 'Elementor Pro', 'Conversion Rate Optimization', 'Healthcare UX'],
    liveUrl: 'https://everyonebyostg.wpenginepowered.com/cleaning-exam/',
    githubUrl: 'https://linkedin.com/in/kri5hna',
    images: {
      hero: '/assets/portfolio/everyonebyone landing page/single page.png',
      gallery: []
    }
  }
];

// Human-friendly screenshot label helper
export function getImageLabel(url: string): string {
  if (!url) return 'Screenshot';
  const lower = url.toLowerCase();
  if (lower.includes('home page') || lower.includes('/home.png') || lower.includes('realtech') && lower.includes('home')) return 'Homepage';
  if (lower.includes('about doctor') || lower.includes('about doctors') || lower.includes('meet-our-dentists')) return 'Doctor Bios';
  if (lower.includes('page 4') || lower.includes('tongue-tie')) return 'Specialty Care';
  if (lower.includes('sa page') || lower.includes('airway-sleep')) return 'Sleep & Airway Support';
  if (lower.includes('location')) return 'Clinic Locations';
  if (lower.includes('single page')) return 'Landing Page';
  if (lower.includes('cleaning-exam')) return 'Cleaning & Exam';
  if (lower.includes('dental-emergencies')) return 'Emergency Care';
  if (lower.includes('naperville')) return 'Naperville Branch';
  if (lower.includes('team')) return 'Doctor Team';
  if (lower.includes('preview')) return 'Vector Mockup';
  if (lower.includes('services')) return 'Services';
  if (lower.includes('mobile')) return 'Mobile View';
  if (lower.includes('metropolis') || lower.includes('metropolice')) return 'Downtown Clinic';
  if (lower.includes('everyonebyo') || lower.includes('everyonebyone')) return 'Patient Funnel';
  if (lower.includes('home')) return 'Homepage';
  return 'Full Page View';
}

// Live websites from Krishna Prajapat resume for the directory section
export const LIVE_WEBSITES_DIRECTORY = {
  landingPages: [
    { title: 'Everyone By One (Cleaning Exam)', url: 'https://everyonebyostg.wpenginepowered.com/cleaning-exam/' },
    { title: 'Metropolis Dental', url: 'https://metropolisden.wpenginepowered.com/' }
  ],
  businessAndCorporate: [
    { title: 'Walnut Street Dental', url: 'https://walnutstreetst.wpenginepowered.com/' },
    { title: 'Evergreen Dental', url: 'https://evergreendcstg.wpenginepowered.com/' },
    { title: 'Village Green Dental', url: 'https://villagegreennb.wpenginepowered.com/' },
    { title: 'Denta Crafters Burke', url: 'https://dentacraftersburke.com/' },
    { title: 'Health Inspired Dentistry', url: 'https://healthinspireddentistry.com/' },
    { title: 'Spring Dental', url: 'https://springdental.info/' },
    { title: 'C-Cube Media', url: 'https://ccubemedia.in/' }
  ],
  ecommerce: [
    { title: 'Neesar Spice Exim', url: 'https://neesarspiceexim.com/' }
  ],
  realEstate: [
    { title: 'A2Z Project Management', url: 'http://a2zpmc.in/' },
    { title: 'Realtech Developers', url: 'https://realtechdevelopers.com/' },
    { title: 'Nakshatra Aastha', url: 'https://nakshatraaazstha.com/' }
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Sarah Mitchell',
    role: 'Managing Director',
    company: 'Patient NEWS Partner',
    rating: 5,
    quote: 'Professional, creative, and easy to work with. Overhauled our pre-launch QA workflow with near-zero defects.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't-2',
    author: 'Michael Chen',
    role: 'Delivery Head',
    company: 'SAVIT Interactive',
    rating: 5,
    quote: 'A talented developer who consistently delivers high-speed, reliable WordPress builds across 120+ client accounts.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't-3',
    author: 'David Wilson',
    role: 'Founder',
    company: 'Cosmic Solutions',
    rating: 5,
    quote: 'Built our database-driven booking platform and companion Android app seamlessly. Exceptional technical versatility.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't-4',
    author: 'Sophia Lee',
    role: 'Lead Strategist',
    company: 'Synovative Agency',
    rating: 5,
    quote: 'Boosted our builder clients’ organic reach and digital lead generation by over 70%. Reliable, efficient, and proactive.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop'
  }
];
