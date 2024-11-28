export function generatePreview(html: string, css: string, js: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          /* Reset default styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          /* Apply user CSS */
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          window.onerror = function(msg, url, lineNo, columnNo, error) {
            console.error('Error: ' + msg + '\\nLine: ' + lineNo + '\\nColumn: ' + columnNo);
            return false;
          };

          try {
            ${js}
          } catch (error) {
            console.error('Error in JavaScript:', error.message);
          }
        </script>
      </body>
    </html>
  `;
}