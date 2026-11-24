const fs = require("fs");
const path = require("path");
const { compile } = require("@tailwindcss/node");
const { Scanner } = require("@tailwindcss/oxide");

async function buildCss() {
  const inputCssPath = path.resolve(__dirname, "../app/input.css");
  const outputCssPath = path.resolve(__dirname, "../app/globals.css");

  // Base Tailwind input if input.css doesn't exist
  let inputCss = '@import "tailwindcss";';
  if (fs.existsSync(inputCssPath)) {
    inputCss = fs.readFileSync(inputCssPath, "utf-8");
  }

  const projectRoot = path.resolve(__dirname, "..");
  const compiler = await compile(inputCss, {
    base: projectRoot,
    from: inputCssPath,
    onDependency: () => {},
  });

  const scanner = new Scanner({
    sources: [
      { base: projectRoot, pattern: "app/**/*.{js,ts,jsx,tsx,html}", negated: false },
      { base: projectRoot, pattern: "components/**/*.{js,ts,jsx,tsx,html}", negated: false },
    ],
  });

  const candidates = scanner.scan();
  const compiled = compiler.build(candidates);

  const customStyles = `
/* Custom typography & branding styles */
:root {
  --font-serif: "Playfair Display", Georgia, serif;
  --font-cinzel: "Cinzel", "Times New Roman", serif;
  --font-script: "Alex Brush", "Brush Script MT", cursive;
  --font-sans: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
  background-color: #FBF6F0;
  color: #2D2325;
  font-family: var(--font-sans);
}

.font-serif-display {
  font-family: var(--font-serif);
}

.font-cinzel {
  font-family: var(--font-cinzel);
}

.font-script {
  font-family: var(--font-script);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #fbf6f0;
}
::-webkit-scrollbar-thumb {
  background: #861532;
  border-radius: 4px;
}
`;

  fs.writeFileSync(outputCssPath, compiled + "\n" + customStyles);
  console.log(`[build-css] Successfully compiled ${outputCssPath} (${(compiled.length / 1024).toFixed(1)} KB)`);
}

buildCss().catch(console.error);
