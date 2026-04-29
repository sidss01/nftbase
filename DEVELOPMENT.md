# Development Guide

## Project Setup

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/sidss01/nftbase.git
cd nftbase

# Install dependencies
npm install

# Start development server
npm run dev
```

## Development Workflow

### Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Building

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## File Structure Details

### `/app` - Next.js App Directory
- `page.tsx` - Main dashboard component
- `layout.tsx` - Root layout with metadata and fonts
- `globals.css` - Global styles and animations

### `/components` - Reusable React Components
- `NFTCard.tsx` - Individual project card with hover effects
- `Filters.tsx` - Search, filter, and sort functionality
- `Stats.tsx` - Statistics dashboard
- `NFTDetail.tsx` - Modal with detailed project information

### `/lib` - Utility Functions
- `nftService.ts` - NFT data operations and mock data
  - `getNFTProjects()` - Fetch all projects
  - `getMintStats()` - Calculate dashboard statistics
  - `searchProjects()` - Full-text search
  - `sortProjects()` - Sort by various criteria

### `/types` - TypeScript Definitions
- `index.ts` - Exported interfaces:
  - `NFTProject` - Project data structure
  - `FilterOptions` - Filter state structure

## Key Technologies

### Next.js 14
- App Router for file-based routing
- Server and Client Components
- Built-in optimization

### React 18
- Hooks for state management
- Functional components
- Fast rendering

### TypeScript
- Type safety throughout
- Better IDE support
- Compile-time error checking

### Tailwind CSS
- Utility-first CSS
- Responsive design
- Custom Base colors

## Component Development

### Creating a New Component

```typescript
// components/MyComponent.tsx
'use client'; // If using React hooks

import React from 'react';

interface MyComponentProps {
  title: string;
}

export function MyComponent({ title }: MyComponentProps) {
  return (
    <div className='p-4 bg-white rounded-lg'>
      <h1 className='text-lg font-bold'>{title}</h1>
    </div>
  );
}
```

### Component Best Practices

1. **Use TypeScript interfaces** for props
2. **Mark client components** with `'use client'` if needed
3. **Use Tailwind classes** for styling
4. **Keep components focused** - single responsibility
5. **Handle loading states** appropriately
6. **Add proper error handling**

## Data Integration

### Replacing Mock Data

The `lib/nftService.ts` contains mock data. To use real data:

```typescript
// Example: Using The Graph
export async function getNFTProjects(): Promise<NFTProject[]> {
  const query = `
    query {
      nftProjects(first: 100) {
        id
        name
        description
        status
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

### Adding Web3 Functionality

```typescript
// lib/web3.ts
import { createPublicClient, http } from 'viem';
import { base } from 'viem/chains';

export const publicClient = createPublicClient({
  chain: base,
  transport: http(),
});

// Reading contract data
export async function getContractData(contractAddress: string) {
  // Use publicClient to read contract state
}
```

## Styling Guide

### Color System

```css
/* Base Chain Colors */
--base-50: #f0f4ff    /* Lightest */
--base-500: #0052cc   /* Primary */
--base-900: #000d28   /* Darkest */
```

### Common Tailwind Patterns

```typescript
// Cards
<div className='bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all'>

// Buttons
<button className='px-4 py-2 bg-base-500 text-white rounded-lg hover:bg-base-600'>

// Gradients
<div className='bg-gradient-to-r from-base-500 to-blue-600'>

// Responsive Grid
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
```

## Performance Optimization

### Image Optimization
- Use emojis for simplicity
- Lazy load images when integrated
- Use Next.js Image component

### Code Splitting
- Components are automatically code-split
- Dynamic imports for heavy components

### Animations
- Use CSS transitions for smooth effects
- Avoid expensive animations on mobile

## Testing

### Unit Testing Setup (Optional)

```bash
npm install --save-dev jest @testing-library/react
```

Example test:

```typescript
// __tests__/NFTCard.test.tsx
import { render, screen } from '@testing-library/react';
import { NFTCard } from '@/components/NFTCard';

describe('NFTCard', () => {
  it('displays project name', () => {
    const project = { /* mock project */ };
    render(<NFTCard project={project} onClick={() => {}} />);
    expect(screen.getByText(project.name)).toBeInTheDocument();
  });
});
```

## Deployment

### Vercel Deployment

```bash
# Connect your GitHub repo to Vercel
# Push to main branch to auto-deploy
git push origin main
```

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_BASE_URL=https://your-domain.com
NEXT_PUBLIC_GRAPH_API=https://your-subgraph.com
```

### Build Output

```bash
npm run build
# Creates .next folder with optimized build
```

## Debugging

### Browser DevTools

1. Open Chrome DevTools (F12)
2. Go to Sources tab
3. Set breakpoints in your code
4. Use Console for logging

### Next.js Debug Mode

```bash
NODE_OPTIONS='--inspect' npm run dev
```

## Common Issues & Solutions

### Issue: Types not found
**Solution**: Run `npm install` and ensure `tsconfig.json` paths are correct

### Issue: Tailwind styles not applying
**Solution**: Check that `tailwind.config.js` includes the correct content paths

### Issue: Components not rendering
**Solution**: Ensure `'use client'` is at top of file if using hooks

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "Add my feature"

# Push and create PR
git push origin feature/my-feature
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Viem Documentation](https://viem.sh)
- [Base Documentation](https://docs.base.org)

## Support

For development questions:
- Check the GitHub issues
- Review existing code comments
- Consult the documentation
- Ask in the Discord community

Happy coding! 🚀
