const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');
const messagesList = document.querySelector('.messages ul');

sendButton.addEventListener('click', () => {
   const messageText = messageInput.value.trim();
   if (messageText !== '') {
      const li = document.createElement('li');
      li.innerText = messageText;
      messagesList.appendChild(li);
      messageInput.value = '';
   }
});

messageInput.addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
      sendButton.click();
      event.preventDefault();
   }
});
