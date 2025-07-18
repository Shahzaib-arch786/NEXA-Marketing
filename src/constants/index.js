// Application constants
export const APP_CONFIG = {
  name: 'NEXA Digital Marketing',
  description: 'Professional Digital Marketing Agency',
  version: '1.0.0',
  author: 'NEXA Digital Marketing Team',
  email: 'contact@nexa-digital-marketing.com',
  phone: '+92-XXX-XXXXXXX',
  address: 'Lahore, Pakistan',
  website: 'https://nexa-digital-marketing.com',
};

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/nexadigitalmarketing',
  twitter: 'https://twitter.com/nexadigital',
  linkedin: 'https://linkedin.com/company/nexa-digital-marketing',
  instagram: 'https://instagram.com/nexadigitalmarketing',
  youtube: 'https://youtube.com/@nexadigitalmarketing',
};

// Navigation items
export const NAVIGATION_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    href: '#home',
    section: 'home',
  },
  {
    id: 'why-us',
    label: 'Why Us',
    href: '#why-us',
    section: 'why-us',
  },
  {
    id: 'about',
    label: 'About Us',
    href: '#about',
    section: 'about',
  },
  {
    id: 'services',
    label: 'Services',
    href: '#services',
    section: 'services',
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '#pricing',
    section: 'pricing',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    section: 'contact',
  },
];

// Service offerings
export const SERVICES = [
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description: 'Improve your website\'s visibility on search engines',
    icon: '🔍',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Local SEO',
      'SEO Audits',
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Engage your audience across social platforms',
    icon: '📱',
    features: [
      'Content Creation',
      'Community Management',
      'Social Media Ads',
      'Influencer Marketing',
      'Analytics & Reporting',
    ],
  },
  {
    id: 'paid-ads',
    title: 'Paid Advertising',
    description: 'Drive targeted traffic with strategic ad campaigns',
    icon: '🎯',
    features: [
      'Google Ads',
      'Facebook Ads',
      'Instagram Ads',
      'LinkedIn Ads',
      'Campaign Optimization',
    ],
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description: 'Create compelling content that converts',
    icon: '✍️',
    features: [
      'Blog Writing',
      'Copywriting',
      'Video Content',
      'Email Marketing',
      'Content Strategy',
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Build fast, responsive, and user-friendly websites',
    icon: '💻',
    features: [
      'Responsive Design',
      'E-commerce Solutions',
      'Website Optimization',
      'Landing Pages',
      'Maintenance & Support',
    ],
  },
  {
    id: 'branding',
    title: 'Brand Marketing',
    description: 'Build a strong, memorable brand identity',
    icon: '🎨',
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Brand Strategy',
      'Visual Identity',
      'Brand Positioning',
    ],
  },
];

// Pricing plans
export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₨25,000',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    features: [
      'SEO Optimization',
      'Social Media Management (2 platforms)',
      'Monthly Analytics Report',
      'Email Support',
      'Basic Content Creation',
    ],
    popular: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '₨50,000',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Starter',
      'Google Ads Management',
      'Social Media Management (4 platforms)',
      'Weekly Analytics Reports',
      'Phone & Email Support',
      'Advanced Content Creation',
      'Competitor Analysis',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '₨100,000',
    period: '/month',
    description: 'For established businesses seeking growth',
    features: [
      'Everything in Professional',
      'Multi-platform Ad Management',
      'Custom Landing Pages',
      'Daily Analytics Reports',
      'Dedicated Account Manager',
      'Priority Support',
      'Custom Strategies',
      'A/B Testing',
    ],
    popular: false,
  },
];

// Company statistics
export const COMPANY_STATS = [
  {
    id: 'clients',
    value: '100+',
    label: 'Happy Clients',
    icon: '👥',
  },
  {
    id: 'projects',
    value: '250+',
    label: 'Completed Projects',
    icon: '📊',
  },
  {
    id: 'experience',
    value: '5+',
    label: 'Years Experience',
    icon: '⭐',
  },
  {
    id: 'success-rate',
    value: '98%',
    label: 'Success Rate',
    icon: '🎯',
  },
];

// Theme configuration
export const THEME_CONFIG = {
  colors: {
    primary: '#0891b2', // cyan-600
    primaryHover: '#0e7490', // cyan-700
    secondary: '#374151', // gray-700
    accent: '#f59e0b', // amber-500
    success: '#10b981', // emerald-500
    warning: '#f59e0b', // amber-500
    error: '#ef4444', // red-500
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// API endpoints (for future use)
export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  quote: '/api/quote',
};

// Local storage keys
export const STORAGE_KEYS = {
  theme: 'nexa-theme',
  userPreferences: 'nexa-user-preferences',
  newsletterSubscription: 'nexa-newsletter-subscribed',
};

// Animation settings
export const ANIMATION_CONFIG = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};