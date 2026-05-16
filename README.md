# AI Chatbot 🤖

A simple AI-powered chatbot built with vanilla HTML, CSS, and JavaScript, powered by the Groq API and LLaMA 3 model.

---

## 🚀 Features

- Real-time AI responses using Groq API
- Clean and simple chat interface
- Typing indicator while waiting for response
- Send message by clicking Send or pressing Enter
- Fully responsive design

---

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)
- [Groq API](https://console.groq.com) (LLaMA 3.3 70b)

---

## ⚙️ Setup & Usage

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ai-chatbot.git
cd ai-chatbot
```

### 2. Get a free Groq API key
- Go to [console.groq.com](https://console.groq.com)
- Sign up for free (no credit card needed)
- Go to **API Keys** → click **Create API Key**
- Copy the key

### 3. Add your API key
- Create a `config.js` file in the project root:
```javascript
const CONFIG = {
    apiKey: "YOUR_GROQ_API_KEY"
};
```

### 4. Open `index.html` in your browser
- No build tools or installations needed!

---

## 🔒 Security Note

- `config.js` is listed in `.gitignore` to keep your API key safe
- Never hardcode or share your API key publicly
- Regenerate your key at [console.groq.com](https://console.groq.com) if it gets exposed

---

## 📁 Project Structure
ai-chatbot/
-index.html       # Main HTML structure
-styles.css       # Styling
-script.js        # Chatbot logic + Groq API call
-config.js        # API key (gitignored, not pushed)
-.gitignore       # Ignores config.js
README.md        # Project documentation

---

## 🙌 Acknowledgements

- [Groq](https://groq.com) for the free and fast API
- [Meta LLaMA 3](https://ai.meta.com/llama/) for the AI model

---

