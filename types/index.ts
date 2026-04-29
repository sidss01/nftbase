export interface NFTProject {
  id: string;
  name: string;
  description: string;
  image?: string;
  status: 'active' | 'upcoming' | 'completed';
  mintPrice: string;
  supply: number;
  minted: number;
  mintDate: string;
  contractAddress: string;
  website?: string;
  twitter?: string;
  discord?: string;
  tags: string[];
  verified: boolean;
  chain: 'base';
}

export interface FilterOptions {
  search: string;
  status: 'all' | 'active' | 'upcoming' | 'completed';
  sortBy: 'newest' | 'minted' | 'supply' | 'verified';
}

export interface MintStats {
  totalProjects: number;
  activeProjects: number;
  upcomingProjects: number;
  totalMinted: number;
  totalValue: string;
}
