const sendButton = document.getElementById("sendButton");
const chatTextInputArea = document.querySelector(".chatTextInputArea");
const chatBody = document.querySelector(".chatBody");

const userData = {
  message: null,
};

// Create user message
function createMessageElement(content, classes) {
  const div = document.createElement("div");
  div.classList.add("message", classes);
  div.innerHTML = content;
  return div;
}

// Handle sending message
function handleSendingMessage(userMessage) {
  userMessage.preventDefault();
  userData.message = chatTextInputArea.value.trim();
  if (userData.message == "") {
    console.error("You must write something!");
    chatTextInputArea.value = "";
  } else {
    chatTextInputArea.value = "";
    const messageContent = `<div class="messageText"></div>`;
    const divMessage = createMessageElement(messageContent, "userMessage");
    divMessage.querySelector(".messageText").textContent = userData.message;
    chatBody.appendChild(divMessage);
  }
}

sendButton.addEventListener("click", (e) => handleSendingMessage(e));

// API setup
const API_KEY = "PASTE HERE YOU API";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// Here you must introduce AI BOT :)
