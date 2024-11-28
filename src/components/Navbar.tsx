import React from 'react';

export function Navbar() {
  return (
    <nav className="border-b border-gray-800/50 backdrop-blur-sm bg-gray-950/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
          CODE/EDIT
        </h1>
        <div className="text-gray-400 text-sm font-jetbrains">
          LIVE PREVIEW MODE
        </div>
      </div>
    </nav>
  );
}