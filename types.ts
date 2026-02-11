import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Amenity {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  isElite: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image?: string;
}