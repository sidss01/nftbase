# 🚀 NFT Base - Free Mint NFT Discovery Platform

A modern, full-featured dApp for discovering free mint NFT projects on the Base chain. Browse current, upcoming, and completed collections with real-time filtering and sorting.

## ✨ Features

### 🎯 Core Features
- **NFT Discovery Dashboard** - Beautiful grid layout showcasing all free mint projects
- **Real-time Filtering** - Filter by status (Active, Upcoming, Completed)
- **Advanced Search** - Search projects by name, description, or tags
- **Smart Sorting** - Sort by newest, most minted, highest supply, or verified status
- **Progress Tracking** - Visual progress bars showing mint completion
- **Detailed Modals** - Click any project for comprehensive information
- **Direct Links** - One-click access to websites, Twitter, Discord, and Basescan

### 📊 Dashboard Statistics
- Total projects count
- Active projects counter
- Upcoming launches tracker
- Total minted NFTs across all projects
- Estimated total value in ETH

### 🎨 Design
- Responsive design (Mobile, Tablet, Desktop)
- Base chain branded color scheme
- Smooth animations and transitions
- Accessibility-focused UI
- Dark/Light mode ready

## 🛠️ Technology Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI component library
- **TypeScript** - Type safety throughout
- **Tailwind CSS** - Utility-first CSS framework
- **Viem/Wagmi** - Web3 connectivity (ready for integration)

## 📦 Installation

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/sidss01/nftbase.git
cd nftbase

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

## 📁 Project Structure

```
nftbase/
├── app/
│   ├── page.tsx              # Main dashboard
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── NFTCard.tsx           # Project card component
│   ├── Filters.tsx           # Search & filter component
│   ├── Stats.tsx             # Statistics dashboard
│   └── NFTDetail.tsx         # Detail modal component
├── lib/
│   └── nftService.ts         # NFT data operations
├── types/
│   └── index.ts              # TypeScript interfaces
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Tailwind configuration
└── README.md                 # This file
```

## 🚀 Usage

### Running the App

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

### Key Components

#### NFTCard Component
Displays individual NFT projects with:
- Project name and description
- Status badge (Active/Upcoming/Completed)
- Mint price
- Progress bar
- Tags
- Action button

#### Filters Component
Provides filtering capabilities:
- Full-text search
- Status filtering
- Sorting options
- Reset button

#### NFTDetail Modal
Shows comprehensive project information:
- Full description
- Contract address with Basescan link
- Mint progress details
- Social media links
- Direct mint button

## 📊 Mock Data

The app includes 8 sample NFT projects:

1. **Base Builders NFT** - Active | 5000 supply | 3421 minted
2. **Onchain Summer Pass** - Active | 2000 supply | 1854 minted
3. **Future Drops Pass** - Upcoming | 3000 supply | Mint: 2026-05-15
4. **Base DeFi Pioneers** - Active | 1500 supply | 1234 minted
5. **Web3 Art Collective** - Upcoming | 4000 supply | Mint: 2026-06-01
6. **Gaming Heroes** - Upcoming | 6000 supply | Mint: 2026-05-30
7. **Genesis Pass** - Completed | 1000 supply | 1000 minted
8. **Community Pass** - Active | 8000 supply | 5432 minted

## 🔗 Real Data Integration

Replace mock data with real blockchain data:

### Option 1: The Graph Protocol

```typescript
// lib/nftService.ts
export async function getNFTProjects(): Promise<NFTProject[]> {
  const query = `
    query {
      nftProjects(first: 100) {
        id
        name
        description
        // ... other fields
      }
    }
  `;

  const response = await fetch('YOUR_SUBGRAPH_URL', {
    method: 'POST',
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data.nftProjects;
}
```

### Option 2: Direct Blockchain Queries

```typescript
// lib/web3.ts
import { createPublicClient, http } from 'viem';
import { base } from 'viem/chains';

export const publicClient = createPublicClient({
  chain: base,
  transport: http(),
});
```

### Option 3: Custom Backend API

```typescript
export async function getNFTProjects(): Promise<NFTProject[]> {
  const response = await fetch('/api/nft/projects');
  return response.json();
}
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the Base chain color scheme:

```javascript
colors: {
  base: {
    50: '#f0f4ff',
    500: '#0052cc',  // Primary
    900: '#000d28',  // Dark
  },
}
```

### Components

All components are reusable and can be customized:

```typescript
<NFTCard 
  project={project} 
  onClick={handleClick}
/>
```

## 📱 Responsive Breakpoints

- **Mobile** (< 640px) - Single column layout
- **Tablet** (640px - 1024px) - 2 column layout
- **Desktop** (> 1024px) - 3+ column layout with sidebar

## 🧪 Testing

(Optional) Set up Jest for unit testing:

```bash
npm install --save-dev jest @testing-library/react
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect to Vercel
3. Deploy with one click

```bash
git push origin main
```

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_BASE_URL=https://your-domain.com
NEXT_PUBLIC_GRAPH_API=https://your-subgraph.com
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this in your projects

## 🔗 Useful Links

- [Base Documentation](https://docs.base.org)
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Viem](https://viem.sh)
- [Wagmi](https://wagmi.sh)

## 💬 Support

For questions or issues:

- Create an issue on GitHub
- Join our Discord community
- Check the development guide: `DEVELOPMENT.md`

## ✨ Built With ❤️

Made for the Base chain community. Happy minting! 🚀

---

**NFT Base** © 2026 | Discover Free Mint NFTs on Base Chain
