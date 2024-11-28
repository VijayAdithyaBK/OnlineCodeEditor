import React from 'react';
import { Editor } from './Editor';
import { Code2, Palette, Terminal } from 'lucide-react';

interface EditorPanelProps {
  html: string;
  css: string;
  js: string;
  onHtmlChange: (value: string) => void;
  onCssChange: (value: string) => void;
  onJsChange: (value: string) => void;
}

export function EditorPanel({ 
  html, 
  css, 
  js, 
  onHtmlChange, 
  onCssChange, 
  onJsChange 
}: EditorPanelProps) {
  return (
    <div className="editor-container grid grid-rows-3 gap-6">
      <Editor
        language="html"
        value={html}
        onChange={onHtmlChange}
        icon={<Code2 className="w-5 h-5" />}
      />
      <Editor
        language="css"
        value={css}
        onChange={onCssChange}
        icon={<Palette className="w-5 h-5" />}
      />
      <Editor
        language="javascript"
        value={js}
        onChange={onJsChange}
        icon={<Terminal className="w-5 h-5" />}
      />
    </div>
  );
}