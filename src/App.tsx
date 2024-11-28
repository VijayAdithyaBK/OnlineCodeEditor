import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { EditorPanel } from './components/EditorPanel';
import { Preview } from './components/Preview';
import { ParallaxBackground } from './components/ParallaxBackground';
import { FloatingElements } from './components/FloatingElements';
import { DEFAULT_HTML, DEFAULT_CSS, DEFAULT_JS } from './constants/defaultCode';

export default function App() {
  const [html, setHtml] = useState(DEFAULT_HTML);
  const [css, setCss] = useState(DEFAULT_CSS);
  const [js, setJs] = useState(DEFAULT_JS);

  return (
    <div className="min-h-screen text-white font-space-grotesk relative">
      <ParallaxBackground />
      <FloatingElements />
      <Navbar />
      <main className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-5rem)] relative">
        <EditorPanel
          html={html}
          css={css}
          js={js}
          onHtmlChange={setHtml}
          onCssChange={setCss}
          onJsChange={setJs}
        />
        <div className="typography-hero h-full">
          <Preview html={html} css={css} js={js} />
        </div>
      </main>
    </div>
  );
}