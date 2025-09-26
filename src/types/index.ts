import { LucideIcon } from 'lucide-react';

export interface LegalItem {
  name: string;
  action?: string;
  href?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}
