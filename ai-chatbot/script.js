document.addEventListener("DOMContentLoaded", () => {

    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    const apiKey = config.apiKey;

    const apiURL = "https://api.groq.com/openai/v1/chat/completions";
    const MODEL = "llama-3.3-70b-versatile";

    function addMessage(message, isUser = false) {
        const messagediv = document.createElement("div");

        messagediv.classList.add("message");
        messagediv.classList.add(isUser ? "user-message" : "bot-message");

        const messageContent = document.createElement("p");
        messageContent.textContent = message;

        messagediv.appendChild(messageContent);
        chatMessages.appendChild(messagediv);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function getBotResponse(userMessage) {
        try {
            const response = await fetch(apiURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: MODEL,
                    messages: [{ role: "user", content: userMessage }],
                    max_tokens: 1024
                })
            });

            const data = await response.json();
            if (!response.ok) {
                console.error("Groq API error:", data);
                return `Error: ${data.error?.message || "Unknown error"}`;
            }

            return data.choices[0].message.content;

        } catch (err) {
            console.error("API error:", err);
            return "Sorry, something went wrong. Please try again.";
        }
    }

    async function showMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = "";

            addMessage("Typing...");

            const botResponse = await getBotResponse(message);

            const allBotMessages = chatMessages.querySelectorAll(".bot-message");
            const lastBotMessage = allBotMessages[allBotMessages.length - 1];
            chatMessages.removeChild(lastBotMessage);

            addMessage(botResponse);
        }
    }

    sendButton.addEventListener("click", showMessage);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            showMessage();
        }
    });

});