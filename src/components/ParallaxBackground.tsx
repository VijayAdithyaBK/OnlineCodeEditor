import React from 'react';

export function ParallaxBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      </div>
      <div className="parallax-layer-1"></div>
      <div className="parallax-layer-2"></div>
      <div className="parallax-layer-3"></div>
    </div>
  );
}