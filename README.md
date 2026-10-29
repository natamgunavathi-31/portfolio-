# Gunavathi Natam — Prompt Engineering Specialist
### Premium 3D Portfolio Website

> **Headline:** *“Turning Ideas into Intelligent AI Experiences.”*  
> **Subheadline:** *“Exploring the power of prompt engineering to create clearer instructions, smarter AI workflows, and more effective interactions with generative AI.”*

---

## 🌟 Overview

A futuristic, cinematic 3D portfolio engineered specifically for **Gunavathi Natam**, an aspiring **Prompt Engineering Specialist**. 

Built with a deep cosmic dark aesthetic (space black, deep navy, electric purple, and neon cyan accents), glassmorphic panels, and an interactive **Three.js 3D AI neural core**. The portfolio is fully responsive, recruiter-friendly, transparent, and emphasizes genuine practice architectures, prompt testing laboratories, and structured workflows.

---

## ⚡ Tech Stack

- **Framework & Language:** React 18, TypeScript, Vite
- **3D Graphics & Canvas:** Three.js (custom interactive WebGL neural core & particle system with graceful CSS fallback)
- **Styling & Design System:** Tailwind CSS, custom glassmorphism, neon glow effects, and gradient typography
- **Icons:** Lucide React
- **Typography:** Outfit, Plus Jakarta Sans, and JetBrains Mono (via Google Fonts)
- **Deployment Ready:** Vercel (`vercel.json` included)

---

## 🚀 Key Features

1. **Interactive 3D Hero Section:**
   - Real-time rotating 3D neural sphere with dynamic synaptic connections that connect and pulse between floating nodes.
   - Mouse & touch tracking with inertia physics.
   - Graceful fallback for non-WebGL or reduced-motion user preferences.
   - **Interactive Prompt Terminal:** Toggle between *Naive Prompt* and *Engineered System Prompt (XML Delimiters + JSON Schema Guardrails)*.
   - Quick action buttons: *“Explore My Work”*, *“About Me”*, and *“Contact Me”*.
   - Social links with clear editable placeholder badges.

2. **About Me & Engineering Philosophy:**
   - Highlights Gunavathi's focus: Generative AI, Large Language Models (LLMs), prompt design, and AI productivity.
   - 4 Architectural Pillars: *Precision Instruction*, *Contextual Grounding*, *Deterministic Outputs*, and *Iterative Benchmarking*.
   - Transparent verification pledge guaranteeing honest representation without fabricated credentials.

3. **Prompt Engineering Skill Architecture:**
   - Categorized cards for the 9 core skills:
     - Prompt Engineering
     - Generative AI
     - Large Language Models (LLMs)
     - Zero-shot and Few-shot Prompting
     - Chain-of-Thought Prompting
     - Structured Output Design
     - AI Workflow Design
     - Prompt Testing and Optimization
     - AI-assisted Research and Content Generation
   - Filter tabs: *All*, *Prompt Engineering*, *LLM Paradigms*, *AI Workflows & Output*, *Testing & Optimization*.
   - **Interactive Syntax Pattern Inspector:** Click any skill to inspect the exact prompt engineering formula, practical use case, and copy the template.

4. **3D Projects & Prototypes:**
   - Premium 3D tilt cards with hover animations and metrics:
     - **AI Prompt Library:** Modular, task-organized repository of tested system prompts.
     - **Prompt Optimization Lab:** Comparative evaluation workbench for prompt variants (A/B testing, hallucination defense).
     - **AI Content Assistant:** Multi-stage pipeline for structured, audience-calibrated content.
     - **AI Research Assistant:** Document synthesis prototype with verifiable citations.
   - Clearly marked as *“Concept & Prototype (In Active Development)”*.
   - **Interactive Project Modal (`ProjectModal`):**
     - *System Prompt Blueprint* tab (with copyable prompt).
     - *Multi-Stage Workflow* pipeline visualization.
     - *Evaluation Criteria & Rubrics* tab.
     - *Interactive Simulator* allowing visitors to test inputs and simulate outputs in real-time.

5. **Experience, Education & Hands-on Labs:**
   - Dedicated tabbed view:
     - *Hands-on AI Labs & Practice* (highlighting genuine prompt experiments and benchmarks).
     - *Academic Education* (clean editable placeholders).
     - *Internships & Work* (editable placeholders).

6. **Verified Certifications & Milestones:**
   - Visual card grid for verified certificates, completed courses, and workshops.
   - Guidance on linking verified credential IDs and certificate URLs.

7. **Contact Section (“Let’s Build Something Intelligent”):**
   - Interactive contact form with real-time field validation (name, email, subject, message).
   - Instant simulated submission with confirmation state.
   - One-click *“Copy Email”* button with feedback.
   - LinkedIn and GitHub placeholder links.

8. **Recruiter-Ready Resume Modal:**
   - Professional modal explaining resume status.
   - Direct download button activates as soon as `Gunavathi_Natam_Resume.pdf` is placed in `/public`.

---

## 📁 Project Structure

```
portfolio-/
├── public/
│   ├── og-preview.png               # Social preview card
│   └── Gunavathi_Natam_Resume_Placeholder.txt
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── CosmicBackground.tsx # Ambient starfield & glow canvas
│   │   │   └── Hero3DScene.tsx      # Three.js 3D Neural Sphere & Synapses
│   │   ├── About.tsx                # About Me & Philosophy
│   │   ├── Certifications.tsx       # Verified Certifications & Workshops
│   │   ├── Contact.tsx              # Validated Contact Form & Direct Links
│   │   ├── Experience.tsx           # Labs, Education & Experience Tabs
│   │   ├── Footer.tsx               # Footer with Back-to-Top
│   │   ├── Hero.tsx                 # Hero section & Interactive Terminal
│   │   ├── Navbar.tsx               # Sticky Glassmorphism Navigation
│   │   ├── ProjectModal.tsx         # Full-screen Interactive Project Modal
│   │   ├── Projects.tsx             # 3D Tilt Cards for 4 Projects
│   │   ├── ResumeModal.tsx          # Resume activation modal
│   │   └── Skills.tsx               # Skill cards & Syntax Inspector
│   ├── data/
│   │   └── portfolioData.ts         # ⭐ SINGLE SOURCE OF TRUTH (Editable)
│   ├── utils/
│   │   └── webgl.ts                 # WebGL & Reduced-Motion detector
│   ├── App.tsx                      # Root Application
│   ├── index.css                    # Tailwind & Glassmorphism design tokens
│   └── main.tsx                     # React Mount Point
├── index.html                       # SEO Meta Tags, Fonts, and Favicon
├── package.json
├── tailwind.config.js               # Theme colors, glow effects & animations
├── tsconfig.json
├── vercel.json                      # Vercel deployment configuration
└── vite.config.ts                   # Vite bundler & vendor code-splitting
```

---

## 🛠️ How to Customize Your Details

All personal information, links, projects, and skills are stored in a single easy-to-edit file:  
`src/data/portfolioData.ts`

### 1. Update Personal & Social Links
Open `src/data/portfolioData.ts`:
```ts
personal: {
  name: "Gunavathi Natam",
  title: "Prompt Engineering Specialist",
  emailPlaceholder: "your.real.email@gmail.com",
  githubPlaceholder: "https://github.com/your-username",
  linkedinPlaceholder: "https://linkedin.com/in/your-profile",
  twitterPlaceholder: "https://x.com/your-handle",
}
```

### 2. Enable Your Resume Download
1. Export your verified resume as `Gunavathi_Natam_Resume.pdf`.
2. Place the PDF in the `public/` folder (`public/Gunavathi_Natam_Resume.pdf`).
3. In `src/data/portfolioData.ts`, change:
```ts
resumeAvailable: true,
```
The download button will immediately unlock!

### 3. Update Education & Work Experience
Edit the `experienceAndEducation` block in `src/data/portfolioData.ts` to replace placeholder university names, graduation years, and company names with your real credentials.

---

## 💻 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://127.0.0.1:3000` in your web browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🚀 Deploying to Vercel

### Option A: Via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete 3D prompt engineering portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** → **"Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect **Vite** and configure the build settings (`npm run build` and `dist` output).
6. Click **"Deploy"**!

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts to deploy in seconds.

---

## 📄 License
Created for **Gunavathi Natam**. Designed with modern web standards, Three.js, React 18, and Tailwind CSS.
