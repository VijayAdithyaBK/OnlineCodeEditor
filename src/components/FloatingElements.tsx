import React from 'react';
import { Code, Brackets, Hash } from 'lucide-react';

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-5">
      <Code className="absolute top-[20%] left-[10%] w-16 h-16 text-blue-500/10 animate-float-slow" />
      <Brackets className="absolute top-[60%] right-[15%] w-24 h-24 text-purple-500/10 animate-float-medium" />
      <Hash className="absolute top-[40%] left-[80%] w-20 h-20 text-green-500/10 animate-float-fast" />
    </div>
  );
}