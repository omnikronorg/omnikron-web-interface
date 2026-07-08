export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  title?: string;
  logoUrl?: string;
  links: NavItem[];
}
