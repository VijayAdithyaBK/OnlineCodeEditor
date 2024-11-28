export const DEFAULT_HTML = `<div class="container">
  <h1>Welcome to Code Editor</h1>
  <p>Start editing to see live changes!</p>
</div>`;

export const DEFAULT_CSS = `body {
  font-family: 'Space Grotesk', sans-serif;
  margin: 0;
  padding: 40px;
  background: #020617;
  color: white;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
}

p {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #94a3b8;
}`;

export const DEFAULT_JS = `document.querySelector('h1').addEventListener('click', function() {
  this.style.background = \`linear-gradient(to right, 
    #\${Math.floor(Math.random()*16777215).toString(16)}, 
    #\${Math.floor(Math.random()*16777215).toString(16)})\`;
});`;