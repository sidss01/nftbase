'use client';

import React from 'react';
import { NFTProject } from '@/types/index';

interface NFTDetailProps {
  project: NFTProject;
  onClose: () => void;
}

export function NFTDetail({ project, onClose }: NFTDetailProps) {
  const progress = (project.minted / project.supply) * 100;

  const openLink = (url?: string) => {
    if (url) window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-base-500 to-base-600 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              {project.name}
              {project.verified && <span className="text-xl">✓</span>}
            </h2>
            <p className="text-sm opacity-90 mt-1">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl hover:opacity-80 transition-opacity"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status and Price */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Status</p>
              <p className="text-lg font-bold text-gray-900">
                {project.status === 'active' && '🟢 Active'}
                {project.status === 'upcoming' && '🔵 Upcoming'}
                {project.status === 'completed' && '⚫ Completed'}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Mint Price</p>
              <p className="text-lg font-bold text-base-600">{project.mintPrice}</p>
            </div>
          </div>

          {/* Mint Progress */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-gray-900">Mint Progress</p>
              <p className="text-sm font-bold text-base-600">{progress.toFixed(1)}%</p>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-base-500 to-base-400 transition-all"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className="text-xs text-gray-600">
              {project.minted.toLocaleString()} / {project.supply.toLocaleString()} minted
            </p>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Mint Date</p>
              <p className="text-lg font-bold text-gray-900">{project.mintDate}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Chain</p>
              <p className="text-lg font-bold text-gray-900">🔵 {project.chain.toUpperCase()}</p>
            </div>
          </div>

          {/* Contract Address */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600 mb-2">Contract Address</p>
            <div className="flex items-center gap-2">
              <code className="text-xs font-mono text-gray-900 flex-1 truncate">{project.contractAddress}</code>
              <button
                onClick={() =>
                  openLink(
                    `https://basescan.org/address/${project.contractAddress}`
                  )
                }
                className="px-3 py-1 bg-base-500 text-white text-xs font-semibold rounded hover:bg-base-600 transition-colors whitespace-nowrap"
              >
                Basescan →
              </button>
            </div>
          </div>

          {/* Tags */}
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-2">Tags</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-base-50 text-base-700 text-xs font-semibold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.website && (
              <button
                onClick={() => openLink(project.website)}
                className="px-4 py-2 bg-base-500 text-white text-sm font-semibold rounded-lg hover:bg-base-600 transition-colors"
              >
                🌐 Website
              </button>
            )}
            {project.twitter && (
              <button
                onClick={() => openLink(project.twitter)}
                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                𝕏 Twitter
              </button>
            )}
            {project.discord && (
              <button
                onClick={() => openLink(project.discord)}
                className="px-4 py-2 bg-indigo-500 text-white text-sm font-semibold rounded-lg hover:bg-indigo-600 transition-colors"
              >
                💬 Discord
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-gray-50 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
          <button className="flex-1 px-4 py-2 bg-base-500 text-white text-sm font-semibold rounded-lg hover:bg-base-600 transition-colors">
            Mint NFT →
          </button>
        </div>
      </div>
    </div>
  );
}
