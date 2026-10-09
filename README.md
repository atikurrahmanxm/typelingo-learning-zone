<div align="center">

# ⚡ TypeWithLearn
### *Interactive "Listen, Learn & Type" English Mastery & Typing Speed Platform*

[![TypeLingo Banner](public/images/typelingo-banner.jpg)](https://github.com/atikurrahmanxm/typelingo-learning-zone)

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Sentences](https://img.shields.io/badge/Practice_Sentences-3%2C000%2B-indigo?style=for-the-badge&logo=book&logoColor=white)](https://github.com/atikurrahmanxm/typelingo-learning-zone)
[![Speed Passages](https://img.shields.io/badge/Speed_Passages-130%2B-emerald?style=for-the-badge&logo=zap&logoColor=white)](https://github.com/atikurrahmanxm/typelingo-learning-zone)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<br />

<p align="center">
  <b>TypeWithLearn</b> is a modern, high-performance web platform that bridges <b>English Language Acquisition</b> with <b>Muscle Memory Touch Typing</b>. Listen to authentic neural voices, type with fluid tactile feedback, analyze real-time grammatical roles, and test typing velocity across 130+ non-repeating intellectual passages.
</p>

[**Live Demo**](#-deployment--hosting) • [**Key Features**](#-key-features) • [**Speed Test Arena**](#-pro-speed--score-test-arena) • [**Keyboard Shortcuts**](#-keyboard-shortcuts) • [**Getting Started**](#-getting-started)

---

</div>

## 🌟 Why TypeWithLearn?

Most typing platforms focus purely on mindless word repetitions (`the`, `quick`, `brown`, `fox`). On the other hand, traditional language apps focus on multiple-choice quizzes that neglect tactile motor memory.

**TypeWithLearn synthesizes both disciplines:**
- **Auditory Memory:** Hear natural sentence rhythm and pronunciation before typing.
- **Cognitive Comprehension:** Understand structural syntax through color-coded grammatical roles (*Subject, Verb, Object, Preposition, Determiner*).
- **Dual-Language Clarity:** Crystal-clear Bengali translations powered by Google's Hind Siliguri font.
- **Motor Speed Execution:** A dedicated, clutter-free Speed Test suite engineered for high-velocity typing without visual distractions.

---

## 🚀 Key Features

### 1. 🎧 Neural Auditory Immersion ("Listen & Type")
- Realistic audio synthesis powered by Edge Neural Voices (`en-US-JennyNeural`).
- Seamless automatic playback: as soon as an exercise is completed, the next sentence sounds naturally.
- Animated audio waveform equalizer with one-key instant replay (<kbd>Tab</kbd>).

### 2. 📚 3,000+ Master English Practice Sentences
- Structured curriculum covering:
  - **Restart English:** Essential introductions and foundational dialogues.
  - **Tense Mastery:** Present, Past, and Future tenses with practical context.
  - **Modal Verbs:** Deep drills on *Can, Could, Should, Must, Would, May, Might*.
  - **Daily Phrases & Work Communication:** Office meetings, networking, and common idioms.
  - **Questions & Answers:** Natural inquiry structures and conversational responses.
- **Smart Queue Engine:** Fisher-Yates randomization backed by `localStorage` prevents repetitive sentence cycles and enables 100% uninterrupted auto-practice.

### 3. 🏷️ Real-Time Grammatical Role Breakdown
- Individual word tokens color-coded by linguistic function:
  - <span style="color:#6366f1">●</span> **Subject** &nbsp;|&nbsp; <span style="color:#10b981">●</span> **Verb** &nbsp;|&nbsp; <span style="color:#f59e0b">●</span> **Object** &nbsp;|&nbsp; <span style="color:#ec4899">●</span> **Preposition** &nbsp;|&nbsp; <span style="color:#8b5cf6">●</span> **Determiner** &nbsp;|&nbsp; <span style="color:#06b6d4">●</span> **Adjective/Adverb**
- Active word highlighting with purple glow and live progress tracking.

### 4. 🇧🇩 Native Dual-Language Support
- High-legibility Bengali sentence translations and word-by-word glossaries rendered in **Google Hind Siliguri** font.
- Designed specifically for ESL learners and Bengali speakers aiming for fluent bilingual fluency.

---

## ⚡ Pro Speed & Score Test Arena

Inspired by modern, distraction-free typing platforms (such as *Monkeytype*), TypeWithLearn includes an integrated **Speed & Score Test Suite**:

- **3 Dynamic Test Modes:**
  - 📝 **Words Mode (Default):** Curated pool of 200+ high-frequency English vocabulary words displayed in full, balanced rows.
  - 📖 **Paragraphs Mode:** **130+ unique, beautifully written non-repeating passages** (50–65 words each) across 9 intellectual categories:
    - *Wisdom & Habits*, *Science & Space*, *Nature & Earth*, *Tech & Future*, *History & Wonders*, *Art & Literature*, *Mind & Potential*, *Daily Serenity*, and *Typing & Flow*.
  - 💬 **Sentences Mode:** Continuous chain of real-world conversational sentences.
- **Flexible Test Durations:** `15s`, `30s`, `60s`, or `120s`.
- **Zero-Distraction Minimalist Canvas:**
  - Single-row segmented control toolbar.
  - Generous line height and responsive font scaling with zero vertical/horizontal window scrollbars.
  - Unbroken reading flow: entire paragraphs stay steady on screen without sudden jumping lines or half-sliced characters.
- **Real-Time Telemetry:** Live WPM, countdown timer, and precision accuracy counter.
- **Comprehensive Score Certificate:**
  - Net WPM, Raw WPM, Accuracy %, Keystroke analysis (Correct vs. Errors).
  - Rank classifications: *Godspeed Master (100+ WPM)*, *Pro Speed Typer (80+ WPM)*, *Fast & Fluent (60+ WPM)*, *Solid Intermediate*, and *Developing Typer*.
  - Personal Best records saved to `localStorage` with celebratory confetti animations.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action | Scope |
| :--- | :--- | :--- |
| <kbd>Space</kbd> | Submit current word and advance | Practice & Speed Test |
| <kbd>Tab</kbd> | Replay sentence audio | Sentence Practice |
| <kbd>Tab</kbd> | Instant Restart Test | Speed Test Arena |
| <kbd>Esc</kbd> | Cancel / Reset Test | Speed Test Arena |
| <kbd>Ctrl</kbd> + <kbd>Space</kbd> | Show hint for current word | Sentence Practice |
| <kbd>Ctrl</kbd> + <kbd>H</kbd> | Toggle preview text visibility | Sentence Practice |
| <kbd>Backspace</kbd> | Delete character / correct mistyped input | Global |

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18.3](https://react.dev/) (Functional components, custom hooks, memoization) |
| **Build & Bundler** | [Vite 6.0](https://vitejs.dev/) (Lightning-fast HMR and optimized Rollup build) |
| **Styling & Design System** | [Tailwind CSS 3.4](https://tailwindcss.com/) (Custom typography, fluid clamp scaling, glassmorphism) |
| **Typography** | Google Fonts (*Hind Siliguri*, *Plus Jakarta Sans*, *Outfit*, *JetBrains Mono*) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Audio Engine** | HTML5 Web Audio API, Synthesized Neural TTS Audio |
| **Celebration & FX** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **State & Persistence** | Browser `localStorage` for streak tracking, XP score, and non-repeating queue memory |

---

## 📂 Project Architecture

```plaintext
typelingo-learning-zone/
├── public/
│   ├── audio/                     # Synthesized neural sentence MP3 clips
│   ├── images/                    # UI assets, banners, and icons
│   └── favicon.svg                # Application branding
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Top branding, live stats capsule & audio toggles
│   │   ├── CategoryBar.jsx        # Sentence topic selector pills
│   │   ├── WordChips.jsx          # Grammar tokens, chips & Bengali translations
│   │   ├── PromptAudio.jsx        # Audio waveform visualizer & playback prompt
│   │   ├── TypingInput.jsx        # Tactile sentence input box with underline slots
│   │   ├── ShortcutBar.jsx        # Helper controls & practice navigation
│   │   ├── SpeedTestView.jsx      # Minimalist pro speed & score test arena
│   │   └── Footer.jsx             # Progress tracker, reset options & attribution
│   ├── data/
│   │   ├── exercises.js           # 3,000+ categorized practice sentences & vocabulary
│   │   └── speedTestParagraphs.js # 130+ non-repeating intellectual passages
│   ├── utils/
│   │   ├── audioPlayer.js         # Web Audio API sound synthesis & keypress acoustics
│   │   ├── speedTestQueue.js      # Fisher-Yates queue engine & unread passage tracker
│   │   └── storage.js             # LocalStorage streak, score & completion state
│   ├── App.jsx                    # Root view orchestrator & mode routing
│   └── main.jsx                   # React 18 DOM root entry point
├── package.json                   # Dependencies & build scripts
└── vite.config.js                 # Vite build optimization configuration
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.0 or higher recommended)
- `npm` or `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/atikurrahmanxm/typelingo-learning-zone.git
cd typelingo-learning-zone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Local Development Server
```bash
npm run dev
```
Open **`http://localhost:3000`** (or the port specified in terminal output) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

---

## 🌐 Deployment & Hosting

TypeWithLearn is a purely client-side Single Page Application (SPA), making it completely free to deploy with zero server maintenance.

### Deploy to Vercel (Recommended)
1. Fork or push this repository to your GitHub account.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your `typelingo-learning-zone` repository.
4. Keep the default settings (Framework: Vite) and click **Deploy**.
5. Your live URL will be ready in under 60 seconds!

### Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Select **Add new site** > **Import an existing project**.
3. Choose GitHub and select `typelingo-learning-zone`.
4. Build command: `npm run build` | Publish directory: `dist`.
5. Click **Deploy Site**.

---

## 🤝 Contributing

Contributions, feedback, and suggestions are warmly welcomed!
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

Crafted with dedication & passion by **[Atikur Rahman](https://github.com/atikurrahmanxm)**

*If this project helps you improve your English or typing speed, consider starring ⭐ the repository!*

</div>
