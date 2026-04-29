'use client';

import React from 'react';
import { NFTProject } from '@/types/index';

interface NFTCardProps {
  project: NFTProject;
  onClick: () => void;
}

export function NFTCard({ project, onClick }: NFTCardProps) {
  const progress = (project.minted / project.supply) * 100;
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    upcoming: 'bg-blue-100 text-blue-800',
    completed: 'bg-gray-100 text-gray-800',
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-base-500 transition-all cursor-pointer overflow-hidden group"
    >
      {/* Header Section */}
      <div className="p-4 pb-3 border-b border-gray-100">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-base-600 transition-colors">
                {project.name}
              </h3>
              {project.verified && <span className="text-base">✓</span>}
            </div>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">{project.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className={`text-xs px-2 py-1 rounded-full font-semibold ${statusColors[project.status]}`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
          <span className="text-xs text-base-600 font-semibold">{project.mintPrice}</span>
        </div>
      </div>

      {/* Progress Section */}
      <div className="p-4">
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-gray-700">Progress</span>
            <span className="text-xs text-gray-600">
              {project.minted.toLocaleString()} / {project.supply.toLocaleString()}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-base-500 to-base-400 transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
        <span className="text-xs text-gray-600">{progress.toFixed(1)}% minted</span>
      </div>

      {/* Tags Section */}
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs bg-base-50 text-base-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs text-gray-600 px-2 py-1">+{project.tags.length - 3}</span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
        <button className="w-full px-3 py-2 bg-base-500 text-white text-sm font-semibold rounded-lg hover:bg-base-600 transition-colors">
          View Details →
        </button>
      </div>
    </div>
  );
}
