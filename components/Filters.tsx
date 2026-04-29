'use client';

import React, { useState } from 'react';
import { FilterOptions } from '@/types/index';

interface FiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export function Filters({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    status: 'all',
    sortBy: 'newest',
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, search: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilters = { ...filters, status: e.target.value as any };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilters = { ...filters, sortBy: e.target.value as any };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-4">
      <h3 className="text-sm font-bold text-gray-900">🔍 Filters</h3>

      {/* Search */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">Search Projects</label>
        <input
          type="text"
          placeholder="Search by name or tag..."
          value={filters.search}
          onChange={handleSearchChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-base-500 focus:border-transparent"
        />
      </div>

      {/* Status Filter */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">Status</label>
        <select
          value={filters.status}
          onChange={handleStatusChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-base-500 focus:border-transparent"
        >
          <option value="all">All Projects</option>
          <option value="active">🟢 Active</option>
          <option value="upcoming">🔵 Upcoming</option>
          <option value="completed">⚫ Completed</option>
        </select>
      </div>

      {/* Sort */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">Sort By</label>
        <select
          value={filters.sortBy}
          onChange={handleSortChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-base-500 focus:border-transparent"
        >
          <option value="newest">Newest First</option>
          <option value="minted">Most Minted</option>
          <option value="supply">Highest Supply</option>
          <option value="verified">Verified First</option>
        </select>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          const reset = { search: '', status: 'all' as const, sortBy: 'newest' as const };
          setFilters(reset);
          onFilterChange(reset);
        }}
        className="w-full px-3 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
}
