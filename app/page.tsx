'use client';

import React, { useState, useEffect } from 'react';
import { NFTProject, FilterOptions } from '@/types/index';
import { getNFTProjects, getMintStats, searchProjects, sortProjects } from '@/lib/nftService';
import { NFTCard } from '@/components/NFTCard';
import { Filters } from '@/components/Filters';
import { Stats } from '@/components/Stats';
import { NFTDetail } from '@/components/NFTDetail';

export default function Home() {
  const [projects, setProjects] = useState<NFTProject[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<NFTProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<NFTProject | null>(null);
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    upcomingProjects: 0,
    totalMinted: 0,
    totalValue: '0 ETH',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getNFTProjects();
        setProjects(data);
        setFilteredProjects(data);
        setStats(getMintStats(data));
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleFilterChange = (filters: FilterOptions) => {
    let filtered = [...projects];

    // Apply status filter
    if (filters.status !== 'all') {
      filtered = filtered.filter(p => p.status === filters.status);
    }

    // Apply search
    if (filters.search) {
      filtered = searchProjects(filtered, filters.search);
    }

    // Apply sorting
    filtered = sortProjects(filtered, filters.sortBy);

    setFilteredProjects(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-50 to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🚀</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">NFT Base</h1>
                <p className="text-xs text-gray-600">Free Mint NFT Discovery Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block px-3 py-1 bg-base-500 text-white rounded-full text-sm font-semibold">
                Base Chain
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Section */}
        <Stats stats={stats} />

        {/* Filters and Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Filters onFilterChange={handleFilterChange} />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="animate-spin text-4xl mb-4">⏳</div>
                  <p className="text-gray-600">Loading NFT projects...</p>
                </div>
              </div>
            ) : filteredProjects.length > 0 ? (
              <div>
                <p className="text-sm text-gray-600 mb-4">
                  Showing <span className="font-semibold">{filteredProjects.length}</span> of
                  <span className="font-semibold ml-1">{projects.length}</span> projects
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProjects.map(project => (
                    <NFTCard
                      key={project.id}
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <p className="text-gray-600">No projects found matching your filters</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      {selectedProject && (
        <NFTDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 text-sm">
            <p>
              NFT Base • Discover free mint NFT projects on Base chain • Built with ❤️ for the
              community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
