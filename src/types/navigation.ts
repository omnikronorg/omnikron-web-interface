export interface NavItem {
  label: string;
  href: string;
  pageId: string;
}

export interface HeaderProps {
  title?: string;
  logoUrl?: string;
  links: NavItem[];
  currentPage: string;
  setCurrentPage: any;
}
