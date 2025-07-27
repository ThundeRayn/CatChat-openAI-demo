# 🐱 AI Chatbot Demo

A minimal and responsive AI-powered chatbot built with React, TailwindCSS, and OpenAI API. Designed as a fast, simple prototype to showcase conversational AI integration.

> coplilot and claude utilized as assistant

---

## ⚙️ Tech Stack

- **React** – Front-end UI  
- **TailwindCSS** (via Vite) – Styling and layout  
- **shadcn UI** – Beautiful UI components  
- **axios** – API requests  
- **OpenAI API** – ChatGPT-style conversational intelligence  

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/ThundeRayn/CatChat-openAI-demo.git
cd CatChat-openAI-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your OpenAI API key

Create a `.env` file in the root directory:

```
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

> 🔒 Never commit your API key to GitHub!

### 4. Start the dev server

```bash
npm run dev
```

Open `http://localhost:5173` to view the chatbot.

---

## 🧠 Features

- Clean, responsive chat interface  
- Typing animation  
- User and bot message history  
- Easily extendable for new prompt types  

---

## 📁 Project Structure

```
src/
├── components/        // UI components (ChatBubble, InputBox, etc.)
├── pages/             // Main Chat view
├── lib/               // API call logic
└── App.tsx            // Root component
```

---

## Backend

`https://github.com/ThundeRayn/Catchat-openAI-demo-backend`

---

## 📌 Could-Do / Future Extend

- Add user auth  
- Save chat history  
- Support for image/chat file input  
- Custom personalities or system prompts  

---
