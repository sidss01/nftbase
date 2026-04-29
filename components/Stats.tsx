'use client';

import React from 'react';
import { MintStats } from '@/types/index';

interface StatsProps {
  stats: MintStats;
}

export function Stats({ stats }: StatsProps) {
  const statItems = [
    {
      label: 'Total Projects',
      value: stats.totalProjects,
      icon: '📦',
      color: 'bg-blue-50 text-blue-700',
    },
    {
      label: 'Active Projects',
      value: stats.activeProjects,
      icon: '🟢',
      color: 'bg-green-50 text-green-700',
    },
    {
      label: 'Upcoming',
      value: stats.upcomingProjects,
      icon: '🔵',
      color: 'bg-blue-50 text-blue-700',
    },
    {
      label: 'Total Minted',
      value: stats.totalMinted.toLocaleString(),
      icon: '✨',
      color: 'bg-purple-50 text-purple-700',
    },
    {
      label: 'Total Value',
      value: stats.totalValue,
      icon: '💰',
      color: 'bg-yellow-50 text-yellow-700',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {statItems.map((stat, idx) => (
        <div key={idx} className={`${stat.color} rounded-lg p-4 border border-current border-opacity-20`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">{stat.icon}</span>
            <span className="text-xs font-semibold opacity-70">Now</span>
          </div>
          <p className="text-2xl font-bold mb-1">{stat.value}</p>
          <p className="text-xs opacity-75">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
