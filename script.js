function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var messageText = messageInput.value;

    if (messageText.trim() !== "") {
        var messageDiv = document.createElement("div");
        messageDiv.classList.add("user-message");
        messageDiv.textContent = messageText;

        var chatBox = document.getElementById("chatBox");
        chatBox.appendChild(messageDiv);

        messageInput.value = "";
        messageInput.focus();

        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
