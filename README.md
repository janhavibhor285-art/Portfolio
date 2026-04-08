# Portfolio
A modern and responsive Portfolio Website built using Next.js and Framer Motion, showcasing projects, services, and personal branding with smooth animations and clean UI.
---------------------------------------------------------------------------------------------------------------------------------------------------------

# 📁 Folder Structure

modern-portfolio/
│
├── components/                # Reusable UI components
│   ├── Avatar.jsx
│   ├── Bulb.jsx
│   ├── CardLeft.jsx
│   ├── CardRight.jsx
│   ├── Circles.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── Nav.jsx
│   ├── ParticlesContainer.jsx
│   ├── ProjectsBtn.jsx
│   ├── ServiceSlider.jsx
│   ├── Socials.jsx
│   ├── TestimonialSlider.jsx
│   ├── TopLeftImg.jsx
│   ├── Transition.jsx
│   └── WorkSlider.jsx
│
├── pages/                     # Application pages (Next.js routing)
│   ├── about/
│   ├── contact/
│   ├── services/
│   ├── testimonials/
│   ├── work/
│   ├── _app.jsx
│   └── index.jsx
│
├── public/                    # Static assets
│
├── styles/                    # Global styles
│   └── globals.css
│
├── variants.js                # Animation variants (Framer Motion)
│
├── .eslintrc.json             # ESLint configuration
├── .gitignore
├── netlify.toml               # Netlify deployment config
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
└── tailwind.config.js

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

# 🧰 Getting Started
  
1. Make sure Git and NodeJS is installed.

2. Clone this repository to your local computer.

3. Open terminal in root directory. Run npm install --legacy-peer-deps or yarn install --legacy-peer-deps.

4. Now app is fully configured 👍 and you can start using this app using npm run dev or yarn dev.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ⚙️ Tech Stack

| Category        | Technologies        |
| --------------- | ------------------- |
| Frontend        | Next.js, React      |
| Styling         | Tailwind CSS        |
| Animation       | Framer Motion       |
| UI Enhancements | tsParticles, Swiper |
| Deployment      | Vercel / Netlify    |

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 💎 Acknowledgements

Key libraries and tools used in this project:

next – v15.5.10
react – v18.2.0
framer-motion – v10.12.16
tailwindcss – v3.3.2
react-icons – v4.8.0
swiper – v12.1.2
react-tsparticles – v2.9.3
tsparticles – v2.9.3
react-countup – v6.4.2
eslint – v8.41.0
postcss – v8.4.23
autoprefixer – v10.4.14

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

🌍 Deployment

This project can be deployed easily using:

Netlify (configured via netlify.toml)
Vercel (recommended for Next.js)
