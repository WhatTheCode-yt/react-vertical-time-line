
# React Vertical Timeline Component Demo

This project showcases the `react-vertical-timeline-component` with **Tailwind CSS**, **React (Vite)**, **Heroicons**, and **PropTypes** to create animated timelines for:

* Portfolio sections (Experience, Education, Projects)
* Task planning (Daily Tasks, Routines)

---

## 🚀 Prerequisites

* **Node.js (v16+)**: [Install Node.js](https://nodejs.org)
* **npm**: Verify with `npm --version`
* **Code Editor**: e.g., VS Code
* **Knowledge**: Basic JavaScript and React

---

## 🛠️ Setup Steps

### 1. Create Vite + React Project

```bash
npm create vite@latest react-vertical-timeline -- --template react
cd react-vertical-timeline
npm install
```

### 2. Install Dependencies

```bash
npm install @heroicons/react prop-types react-vertical-timeline-component tailwindcss @tailwindcss/vite
```

### 3. Configure Vite (`vite.config.js`)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 4. Add Application Code

Replace the contents of `src/App.jsx` with the provided implementation (uses Pexels/Unsplash for project images).

---

## ▶️ Run the App

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 📚 Timeline Sections

* **Work Experience**: Displays job history with skills
* **Education**: Shows academic achievements and topics
* **Projects**: Features projects with images/documents
* **Daily Tasks**: Lists tasks with priority and status
* **Routine**: Shows recurring tasks with frequency

---

## ✨ Features

* **Dynamic Timelines**: Filterable by section
* **Interactive UI**: Edit, delete, and share buttons (dummy implementations)
* **Responsive Design**: Tailwind CSS + random card colors
* **Heroicons**: Icons for timeline sections
* **Custom Layout**: Left, right, or alternate card positions

---

## 🧩 Customization

* Replace data in:

  * `workExperienceData`
  * `educationData`
  * `projectData`
  * `dailyTasksData`
  * `routineData`
* Update image URLs in `projectData` (use your own)
* Modify `colorPalette` in `App.jsx`
* Customize Tailwind styles in `timelineStyles`

---

## 🛠️ Troubleshooting

* **Images not loading**: Check dev console (`F12 → Console/Network`) and verify URLs
* **Tailwind not working**: Confirm Tailwind plugin in `vite.config.js` and restart server
* **Timeline issues**: Ensure component & CSS are installed/imported
* **General errors**: Reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🚢 Deployment

Run the build and deploy using Netlify, Vercel, or any static host:

```bash
npm run build
```


