# 🌿 Kotulpur — Regional Web Portal

> A modern, responsive regional website for **Kotulpur**, West Bengal — built with React, Tailwind CSS, and Motion for fluid, immersive experiences.

---

## 📍 About the Project

**Kotulpur** is a community-driven regional web portal for the town of Kotulpur, located in Bankura district, West Bengal, India. The site serves as a digital home for locals, visitors, and the diaspora — celebrating local culture, news, events, history, and civic resources.

---

## ✨ Tech Stack

| Technology                    | Purpose                                                  |
| ----------------------------- | -------------------------------------------------------- |
| ⚛️ **React**                  | Component-based UI architecture                          |
| 🎨 **Tailwind CSS**           | Utility-first styling & responsive design                |
| 🎞️ **Motion** (Framer Motion) | Page transitions, scroll animations & micro-interactions |

---

## 🗂️ Project Structure

```
kotulpur/
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── News.jsx
│   │   └── Contact.jsx
│   ├── animations/
│   │   └── variants.js        # Motion animation variants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              # Tailwind directives
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/kotulpur.git

# Navigate into the project
cd kotulpur

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎞️ Animation Guide (Motion)

This project uses **Motion** for all animations. Animation variants are centralized in `src/animations/variants.js`.

```js
// Example: Fade-up variant used across pages
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
```

Usage in a component:

```jsx
import { motion } from "motion/react";
import { fadeUp } from "../animations/variants";

<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2>Welcome to Kotulpur</h2>
</motion.div>;
```

---

## 📦 Key Dependencies

```json
{
  "react": "^19.x",
  "react-dom": "^19.x",
  "react-router-dom": "^7.x",
  "motion": "^12.x",
  "tailwindcss": "^4.x",
  "@tailwindcss/vite": "^4.x"
}
```

Install Motion:

```bash
npm install motion
```

---

## 🌐 Pages Overview

| Route      | Page    | Description                              |
| ---------- | ------- | ---------------------------------------- |
| `/`        | Home    | Hero section, highlights, latest news    |
| `/about`   | About   | History & overview of Kotulpur           |
| `/events`  | Events  | Local festivals, fairs & cultural events |
| `/news`    | News    | Regional news & announcements            |
| `/gallery` | Gallery | Photo gallery of Kotulpur                |
| `/contact` | Contact | Get in touch / feedback form             |

---

## 📄 License

**© 2026 Kotulpur. All Rights Reserved.**

This project and its source code are proprietary. No part of this project may be copied, modified, distributed, or used in any form without explicit written permission from the owner.

---

## 🙏 Acknowledgements

- The people of **Kotulpur**, Bankura, West Bengal
- [React](https://react.dev/) · [Tailwind CSS](https://tailwindcss.com/) · [Motion](https://motion.dev/)
- Inspired by the culture, nature, and heritage of rural Bengal 🌾

---

<p align="center">
  Made with ❤️ for Kotulpur
</p>
