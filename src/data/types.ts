export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  featured?: boolean;
  avatar?: string;
}

export interface Module {
  title: string;
  moduleNumber: string;
  topics: string[];
  imageSrc?: string;
  imagePosition?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
  icon?: string;
  iconSrc?: string;
  iconClass?: string;
  iconStyle?: string;
  title: string;
  description: string;
}

export interface NumberedItem {
  number: string;
  text: string;
}

export interface FeatureCard {
  iconSrc: string;
  iconClass?: string;
  iconStyle?: string;
  title: string;
  description: string;
}

export interface OutcomeCard {
  title: string;
  icon: string;
  bgColor: string;
  textColor?: string;
}

export interface PricingPlan {
  title: string;
  subtitle: string;
  features: string[];
  highlightFeatures?: string[];
  ctaText: string;
  ctaHref: string;
  variant: 'dark' | 'light';
}

export interface AlumniTestimonial {
  name: string;
  avatar: string;
  review: string;
}
