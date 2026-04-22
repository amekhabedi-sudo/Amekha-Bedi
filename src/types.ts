export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Photography' | 'Drawings & Illustrations' | 'AI-Generated Work';
  imageUrl: string;
  caption: string;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
