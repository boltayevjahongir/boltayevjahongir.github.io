// Chatbot Widget Implementation
class ChatbotWidget {
  constructor() {
    this.messages = [];
    this.isOpen = false;
    this.init();
  }

  init() {
    this.createWidgetElements();
    this.attachEventListeners();
  }

  createWidgetElements() {
    // Create chat button
    this.chatButton = document.createElement('a');
    this.chatButton.className = 'chatbot-button';
    this.chatButton.innerHTML = '<img src="./assets/images/chat-icon.png" alt="">';

    // Create chat container
    this.chatContainer = document.createElement('div');
    this.chatContainer.className = 'chatbot-container';
    this.chatContainer.innerHTML = `
      <div class="chatbot-header">
        <h3>Chat with us</h3>
        <button class="close-button">✕</button>
      </div>
      <div class="chatbot-messages"></div>
      <div class="chatbot-input">
        <input type="text" placeholder="Type your message...">
        <button class="send-button">Send</button>
      </div>
    `;

    // Append elements to body
    document.body.appendChild(this.chatButton);
    document.body.appendChild(this.chatContainer);

    // Store references to elements
    this.messagesContainer = this.chatContainer.querySelector('.chatbot-messages');
    this.input = this.chatContainer.querySelector('input');
    this.sendButton = this.chatContainer.querySelector('.send-button');
    this.closeButton = this.chatContainer.querySelector('.close-button');
  }

  attachEventListeners() {
    this.chatButton.addEventListener('click', () => this.toggleChat());
    this.closeButton.addEventListener('click', () => this.toggleChat());
    this.sendButton.addEventListener('click', () => this.sendMessage());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    this.chatContainer.classList.toggle('open', this.isOpen);
    this.chatButton.classList.toggle('hidden', this.isOpen);
    if (this.isOpen) this.input.focus();
  }

  sendMessage() {
    const message = this.input.value.trim();
    if (!message) return;

    this.addMessage('user', message);
    this.input.value = '';

    // Simulate bot response
    setTimeout(() => {
      this.addMessage('bot', this.generateBotResponse());
    }, 1000);
  }

  addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}-message`;
    messageElement.innerHTML = `
      <div class="message-content">
        ${this.sanitizeInput(text)}
      </div>
      <div class="message-timestamp">
        ${new Date().toLocaleTimeString()}
      </div>
    `;

    this.messagesContainer.appendChild(messageElement);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  generateBotResponse() {
    const responses = [
      "Thank you for your message! I'll help you with that.",
      "I understand. Could you please provide more details?",
      "I'm processing your request. Please wait a moment.",
      "That's interesting! Let me check that for you."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  sanitizeInput(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize the chatbot when the script loads
window.addEventListener('DOMContentLoaded', () => {
  new ChatbotWidget();
});