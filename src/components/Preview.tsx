import React, { useEffect, useRef } from 'react';
import { Play, Maximize2 } from 'lucide-react';
import { generatePreview } from '../utils/generatePreview';

interface PreviewProps {
  html: string;
  css: string;
  js: string;
}

export function Preview({ html, css, js }: PreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const updatePreview = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const previewContent = generatePreview(html, css, js);
    const blob = new Blob([previewContent], { type: 'text/html' });
    const blobURL = URL.createObjectURL(blob);

    iframe.src = blobURL;
    return () => URL.revokeObjectURL(blobURL);
  };

  useEffect(() => {
    const cleanup = updatePreview();
    return () => {
      cleanup?.();
    };
  }, [html, css, js]);

  return (
    <div className="h-full flex flex-col rounded-xl overflow-hidden border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
      <div className="bg-gray-900/80 px-4 py-3 flex items-center justify-between border-b border-gray-800/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-jetbrains text-sm text-gray-300">LIVE PREVIEW</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={updatePreview}
            className="p-1.5 hover:bg-gray-800 rounded-md transition-colors"
            title="Refresh Preview"
          >
            <Play className="w-4 h-4" />
          </button>
          <button 
            className="p-1.5 hover:bg-gray-800 rounded-md transition-colors"
            title="Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      <iframe
        ref={iframeRef}
        title="preview"
        className="flex-1 w-full bg-gray-950"
        sandbox="allow-scripts allow-modals allow-popups allow-forms allow-same-origin"
        onError={(e) => console.error('Preview iframe error:', e)}
      />
    </div>
  );
}