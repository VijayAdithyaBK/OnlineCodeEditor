import React from 'react';
import type { ReactNode } from 'react';

interface EditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  icon: ReactNode;
}

export function Editor({ language, value, onChange, icon }: EditorProps) {
  return (
    <div className="h-full flex flex-col rounded-xl overflow-hidden border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
      <div className="bg-gray-900/80 px-4 py-3 flex items-center justify-between border-b border-gray-800/50">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-jetbrains text-sm text-gray-300">
            {language.toUpperCase()}
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          <div className="w-3 h-3 rounded-full bg-gray-700"></div>
        </div>
      </div>
      <textarea
        className="flex-1 w-full bg-transparent text-gray-100 font-jetbrains p-4 resize-none outline-none text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        placeholder={`Enter your ${language} code here...`}
      />
    </div>
  );
}