export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Photography' | 'Drawings & Illustrations' | 'AI-Generated Work' | 'AI & AI-Generated Works';
  imageUrl: string;
  videoUrl?: string;
  altText?: string;
  caption: string;
  description?: string;
  excludeFromAll?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
