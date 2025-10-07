# Uni-Stay
Smart Student Housing Reservation System—a digital platform designed to streamline the process of finding, viewing, and reserving off-campus student accommodation near the university. The system will connect students directly with landlords/property managers, ensuring a transparent, quick, and reliable booking experience.

## 🚀 Getting Started
### 1️⃣ Clone the repository
```bash
git clone https://github.com/khnmoa/Uni-Stay.git
cd Uni-Stay
```
### 2️⃣ Install dependencies
Make sure you have Node.js (v16+) installed, then run:
```bash
npm install
```
### 3️⃣ Build Tailwind CSS
To generate your tailwind-output.css file once:
```bash
npm run build
```
To keep watching for changes and rebuild automatically:
```bash
npm run watch
```
This will compile:
- Input file → ./css/tailwind-input.css
- Output file → ./css/tailwind-output.css
Make sure your HTML references the Tailwindcss output file:
```html
<link href="../css/tailwind-output.css" rel="stylesheet">
```
### 4️⃣ Editing the Code
- All your custom HTML pages go in the project root or /pages folder.
- All the CSS files is in /css folder.
- All the JS files is in /js folder.
- Images is to be added in /assets folder.
- Add or modify Tailwind utility classes directly in the HTML.
- Customize theme colors, spacing, or fonts inside tailwind.config.js.

### 5️⃣ Run locally
After running npm run watch, open your HTML file (e.g., index.html) in your browser.
You can use the Live Server extension (in VS Code) for auto-refresh.