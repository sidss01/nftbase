import { NFTProject, MintStats } from '@/types/index';

const mockProjects: NFTProject[] = [
  {
    id: '1',
    name: 'Base Builders NFT',
    description: 'Join the Base ecosystem builders community with exclusive perks',
    status: 'active',
    mintPrice: 'Free',
    supply: 5000,
    minted: 3421,
    mintDate: '2026-04-15',
    contractAddress: '0x1234567890123456789012345678901234567890',
    website: 'https://base.org',
    twitter: 'https://twitter.com/base',
    discord: 'https://discord.gg/base',
    tags: ['Builders', 'Community', 'Base'],
    verified: true,
    chain: 'base',
  },
  {
    id: '2',
    name: 'Onchain Summer Pass',
    description: 'Limited edition pass for Onchain Summer event on Base',
    status: 'active',
    mintPrice: 'Free',
    supply: 2000,
    minted: 1854,
    mintDate: '2026-04-10',
    contractAddress: '0x2345678901234567890123456789012345678901',
    website: 'https://onchainsummer.xyz',
    twitter: 'https://twitter.com/onchainsummer',
    discord: 'https://discord.gg/onchainsummer',
    tags: ['Event', 'Pass', 'Summer'],
    verified: true,
    chain: 'base',
  },
  {
    id: '3',
    name: 'Future Drops Pass',
    description: 'Get early access to upcoming NFT drops on Base',
    status: 'upcoming',
    mintPrice: 'Free',
    supply: 3000,
    minted: 0,
    mintDate: '2026-05-15',
    contractAddress: '0x3456789012345678901234567890123456789012',
    website: 'https://futuredrops.xyz',
    twitter: 'https://twitter.com/futuredrops',
    discord: 'https://discord.gg/futuredrops',
    tags: ['Early Access', 'Drops', 'Utility'],
    verified: true,
    chain: 'base',
  },
  {
    id: '4',
    name: 'Base DeFi Pioneers',
    description: 'Celebrate early DeFi participants on Base blockchain',
    status: 'active',
    mintPrice: 'Free',
    supply: 1500,
    minted: 1234,
    mintDate: '2026-03-20',
    contractAddress: '0x4567890123456789012345678901234567890123',
    website: 'https://basefinance.xyz',
    twitter: 'https://twitter.com/basefinance',
    discord: 'https://discord.gg/basefinance',
    tags: ['DeFi', 'Pioneers', 'Finance'],
    verified: true,
    chain: 'base',
  },
  {
    id: '5',
    name: 'Web3 Art Collective',
    description: 'Artist collective showcase on Base chain',
    status: 'upcoming',
    mintPrice: 'Free',
    supply: 4000,
    minted: 0,
    mintDate: '2026-06-01',
    contractAddress: '0x5678901234567890123456789012345678901234',
    website: 'https://web3art.xyz',
    twitter: 'https://twitter.com/web3art',
    discord: 'https://discord.gg/web3art',
    tags: ['Art', 'Creative', 'Collective'],
    verified: false,
    chain: 'base',
  },
  {
    id: '6',
    name: 'Gaming Heroes',
    description: 'Play-to-earn gaming NFTs on Base',
    status: 'upcoming',
    mintPrice: 'Free',
    supply: 6000,
    minted: 0,
    mintDate: '2026-05-30',
    contractAddress: '0x6789012345678901234567890123456789012345',
    website: 'https://gamingheroes.xyz',
    twitter: 'https://twitter.com/gamingheroes',
    discord: 'https://discord.gg/gamingheroes',
    tags: ['Gaming', 'Play-to-Earn', 'NFT'],
    verified: true,
    chain: 'base',
  },
  {
    id: '7',
    name: 'Genesis Pass',
    description: 'Original genesis collection on Base - COMPLETED',
    status: 'completed',
    mintPrice: 'Free',
    supply: 1000,
    minted: 1000,
    mintDate: '2026-02-14',
    contractAddress: '0x7890123456789012345678901234567890123456',
    website: 'https://genesis.base',
    twitter: 'https://twitter.com/genesisbase',
    discord: 'https://discord.gg/genesisbase',
    tags: ['Genesis', 'Original', 'Classic'],
    verified: true,
    chain: 'base',
  },
  {
    id: '8',
    name: 'Community Pass',
    description: 'Reward for active Base community members',
    status: 'active',
    mintPrice: 'Free',
    supply: 8000,
    minted: 5432,
    mintDate: '2026-04-01',
    contractAddress: '0x8901234567890123456789012345678901234567',
    website: 'https://community.base',
    twitter: 'https://twitter.com/basecommunity',
    discord: 'https://discord.gg/basecommunity',
    tags: ['Community', 'Reward', 'Member'],
    verified: true,
    chain: 'base',
  },
];

export async function getNFTProjects(): Promise<NFTProject[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProjects;
}

export function getMintStats(projects: NFTProject[]): MintStats {
  const activeProjects = projects.filter(p => p.status === 'active').length;
  const upcomingProjects = projects.filter(p => p.status === 'upcoming').length;
  const totalMinted = projects.reduce((sum, p) => sum + p.minted, 0);

  return {
    totalProjects: projects.length,
    activeProjects,
    upcomingProjects,
    totalMinted,
    totalValue: (totalMinted * 0.001).toFixed(2) + ' ETH',
  };
}

export function searchProjects(projects: NFTProject[], query: string): NFTProject[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function sortProjects(
  projects: NFTProject[],
  sortBy: 'newest' | 'minted' | 'supply' | 'verified'
): NFTProject[] {
  const sorted = [...projects];

  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => new Date(b.mintDate).getTime() - new Date(a.mintDate).getTime());
    case 'minted':
      return sorted.sort((a, b) => b.minted - a.minted);
    case 'supply':
      return sorted.sort((a, b) => b.supply - a.supply);
    case 'verified':
      return sorted.sort((a, b) => (b.verified ? 1 : -1) - (a.verified ? 1 : -1));
    default:
      return sorted;
  }
}
