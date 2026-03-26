//import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.0.0-next.8';

let numberOfScammers= 10;
let numberOfWrongIdentified = 0;
// Create a text generation pipeline
//const generator = await pipeline(
  //"text-generation",
 // "HuggingFaceTB/SmolLM2-135M-Instruct",
//);

let gotHacked = false; 
const chats = [
  {
    name: "Unknown Number",
    msg: "Hi dear",
    time: "09:12",
    unread: 3,
    scammer: 1,
    messages: [
      { text: "Hi dear, are you free to chat?", sent: false },
      { text: "Who is this?", sent: true },
      { text: "I got your number from a friend 😊", sent: false },
      { text: "I think you have the wrong number", sent: true },
      { text: "Oh sorry, but maybe we can still be friends?", sent: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwAo-8YklkELgYIcSk9uzzB0_3aeHBvUtyw&s" }
    ],
  },
  {
    name: "Bank Alert",
    msg: "URGENT: Account locked",
    time: "08:45",
    unread: 1,
    scammer: 1,
    messages: [
      { text: "URGENT: Your bank account has been locked.", sent: false },
      { text: "Click here to verify immediately: http://secure-bank-login.co", sent: false }
    ]
  },
  {
    name: "Jason",
    msg: "See you later",
    time: "07:30",
    unread: 0,
    scammer: 0,
    messages: [
      { text: "Are we still meeting later?", sent: false },
      { text: "Yep, 5pm right?", sent: true },
      { text: "Yes, see you later", sent: false }
    ]
  },
  {
    name: "Mom",
    msg: "Call me",
    time: "07:10",
    unread: 1,
    scammer: 0,
    messages: [
      { text: "Call me when you're free", sent: false }
    ]
  },
  {
    name: "Grab Delivery",
    msg: "Your parcel",
    time: "06:55",
    unread: 2,
    scammer: 1,
    messages: [
      { text: "Your parcel could not be delivered.", sent: false },
      { text: "Please update your address here: http://grab-delivery-help.cc", sent: false }
    ]
  },
  {
    name: "Sarah",
    msg: "HAHAHA",
    time: "Yesterday",
    unread: 0,
    scammer: 0,
    messages: [
      { text: "That was so funny 😂", sent: false },
      { text: "I know right", sent: true }
    ]
  },
  {
    name: "Boss",
    msg: "Need help",
    time: "Yesterday",
    unread: 4,
    scammer: 1,
    messages: [
      { text: "Hi, I'm in a meeting right now", sent: false },
      { text: "Can you help me buy some gift cards?", sent: false },
      { text: "Send me the codes ASAP", sent: false }
    ]
  },
  {
    name: "Daniel",
    msg: "Game tonight?",
    time: "Yesterday",
    unread: 0,
    scammer: 0,
    messages: [
      { text: "Game tonight?", sent: false },
      { text: "Can't, got homework 😭", sent: true }
    ]
  },
  {
    name: "Crypto Invest",
    msg: "Earn fast",
    time: "Yesterday",
    unread: 5,
    scammer: 1,
    messages: [
      { text: "Earn $500 daily with crypto!", sent: false },
      { text: "No experience needed", sent: false },
      { text: "Join here: http://crypto-fastprofit.biz", sent: false }
    ]
  },
  {
    name: "Aunt May",
    msg: "Dinner Sunday",
    time: "Yesterday",
    unread: 0,
    scammer: 0,
    messages: [
      { text: "Dinner this Sunday?", sent: false },
      { text: "Sure!", sent: true }
    ]
  },
  {
    name: "Unknown Caller",
    msg: "OTP request",
    time: "2 days ago",
    unread: 2,
    scammer: 1,
    messages: [
      { text: "Hi, I accidentally sent you an OTP", sent: false },
      { text: "Can you send it back to me?", sent: false }
    ]
  },
  {
    name: "Kevin",
    msg: "Assignment done?",
    time: "2 days ago",
    unread: 0,
    scammer: 0,
    messages: [
      { text: "Did you finish the assignment?", sent: false },
      { text: "Almost done", sent: true }
    ]
  },
  {
    name: "Shopee Promo",
    msg: "You won!",
    time: "2 days ago",
    unread: 3,
    scammer: 1,
    messages: [
      { text: "Congratulations! You won a free iPhone!", sent: false },
      { text: "Claim here: http://shopee-freegift.xyz", sent: false }
    ]
  },
  {
    name: "Teacher",
    msg: "Reminder",
    time: "3 days ago",
    unread: 1,
    scammer: 0,
    messages: [
      { text: "Reminder: Submit your homework tomorrow", sent: false }
    ]
  },
  {
    name: "Dad",
    msg: "Reached home",
    time: "3 days ago",
    unread: 0,
    scammer: 0,
    messages: [
      { text: "Reached home safely", sent: false },
      { text: "Okay 👍", sent: true }
    ]
  },
  {
    name: "Part Time Job",
    msg: "Easy money",
    time: "3 days ago",
    unread: 6,
    scammer: 1,
    messages: [
      { text: "Looking for part-time job?", sent: false },
      { text: "Earn RM300/day easily", sent: false },
      { text: "Just like and share posts", sent: false }
    ]
  },
  {
    name: "Lina",
    msg: "Thanks!",
    time: "4 days ago",
    unread: 0,
    scammer: 0,
    messages: [
      { text: "Thanks for helping me yesterday!", sent: false },
      { text: "No problem 😊", sent: true }
    ]
  },
  {
    name: "Police Notice",
    msg: "Legal action",
    time: "4 days ago",
    unread: 2,
    scammer: 1,
    messages: [
      { text: "You have an unpaid fine.", sent: false },
      { text: "Failure to pay will result in arrest.", sent: false },
      { text: "Pay here: http://legal-fine-pay.cc", sent: false }
    ]
  },
  {
    name: "Ryan",
    msg: "Basketball later",
    time: "5 days ago",
    unread: 0,
    scammer: 0,
    messages: [
      { text: "Basketball later?", sent: false },
      { text: "Sure!", sent: true }
    ]
  },
  {
    name: "New Phone (Mom?)",
    msg: "Important",
    time: "5 days ago",
    unread: 3,
    scammer: 1,
    messages: [
      { text: "Hi, this is mom. I changed my number.", sent: false },
      { text: "Can you transfer me RM500 urgently?", sent: false },
      { text: "My bank app not working", sent: false }
    ]
  }
];

const resultScreen = document.createElement('div');
resultScreen.className = 'result-screen';

const hackScreen = document.createElement('div');
hackScreen.className = 'hack-screen';
hackScreen.innerHTML = ` 
<div class="hackScreen-header">
<div class="hackScreen-btn"><div class="button red"></div><div class="button yellow"></div><div class="button green"></div></div>
</div>
<div class="hackScreen-title">Microsoft Windows [Version 10.0.26200.8037]
(c) Microsoft Corporation. All rights reserved.</div>
<div class="hackScreen-content">C:\Users\HackerMan>Hehehaw, you are being hacked and you dont even know, this screen will randomly pop in and out and confuse you</div>
`;

document.body.appendChild(hackScreen);

const el = document.querySelector('.hack-screen');

function triggerHack() {
  el.classList.remove('hackAnimation');
 
    void el.offsetWidth; // restart animation

const top = Math.random() * 50;
const left = Math.random() * 50;

el.style.top = `${top}%`;
el.style.display='block';
el.style.left = `${left}%`;

  el.classList.add('hackAnimation');

  // random delay between 0.5s and 4s
  const next = Math.random() * 3000 + 8000;
  setTimeout(triggerHack, next);
}


const explainScreen = document.createElement('div');
explainScreen.className = 'explain-screen';
explainScreen.innerHTML = `
<div class="explain-content">
<div class="explain-header">
<h2>Welcome to WhatsUp</h2>
<div class="close-btn">X</div>
</div>
<p>This is a simulation of a chat application designed to demonstrate how scammers operate and how to identify them. The chats you see are generated based on real scam conversations, but they are entirely fictional.</p>
<p>Click on any chat to see the conversation. Some chats are from scammers, while others are from regular contacts. Pay attention to the messages and try to identify which ones might be scams!</p>
<p>Remember, always be cautious when chatting with unknown contacts, and never share personal information or send money to someone you don't trust.</p>
<p>Block anyone you think is a scammer. You will be scored on how many scammers you identify and how quickly you respond to them.</p>
</div>
`;

document.body.appendChild(explainScreen);

const closeBtn = explainScreen.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  explainScreen.style.display = 'none';
  startTimer();
});

const chatList = document.getElementById('chatList');
const timerElement = document.querySelector('.timer');

let timerInterval;
let secondsElapsed = 0;

function playTick() {
  const audio = new Audio('clock.mp3');
  audio.volume = 0.3; // Adjust volume as needed
  audio.play().catch(e => console.log('Audio play failed:', e));
}

function startTimer() {
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  // playTick();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

const chatSpace = document.querySelector(".main");

  chats.forEach(chat => {
  const div = document.createElement("div");
  div.className = "chat";
  div.dataset.chatName = chat.name;

  div.innerHTML = `
      <div class="avatar"></div>
      <div class="chat-info">
        <div class="chat-name">${chat.name}</div>
        <div class="chat-msg">${chat.msg}</div>
      </div>
      <div class="chat-meta">
        <div>${chat.time}</div>
        ${chat.unread ? `<div class="badge">${chat.unread}</div>` : ""}
      </div>
    `;

  div.addEventListener('click', () => {
    console.log(`Chat "${chat.name}" clicked. Scammer value: ${chat.scammer}`);
    // Remove active from all chats
    document.querySelectorAll('.chat').forEach(c => c.classList.remove('active'));
    // Add active to this chat
    div.classList.add('active');

    div.querySelector('.badge')?.remove();
    // Hide welcome-box
    document.querySelector('.welcome-box').style.display = 'none';
    // Hide all chat-views
    document.querySelectorAll('.chat-view').forEach(v => v.style.display = 'none');
    // Show the chat-view for this chat
    const chatView = document.querySelector(`.chat-view[data-chat-name="${chat.name}"]`);
    chatView.style.display = 'flex';
    // Make main flex column
    chatSpace.style.flexDirection = 'column';

  });

  chatList.appendChild(div);
});

// Create chat views
chats.forEach(chat => {
  const chatView = document.createElement("div");
  chatView.className = "chat-view";
  chatView.dataset.chatName = chat.name;
  chatView.innerHTML = `
      <div class="chat-header">
        <div class="chat-avatar"></div>
        <div class="chat-title">${chat.name}</div>
        <div class="block">Block</div>
      </div>
      <div class="messages">
        ${chat.messages.map(msg => `
          <div class="message ${msg.sent ? 'sent' : 'received'}">
            ${msg.image ? `<img src="${msg.image}" class="message-image" alt="Image">` : ''}
            ${msg.text ? `<div class="message-text">${msg.text}</div>` : ''}
          </div>
        `).join('')}
      </div>
      <div class="input-area">
        <input type="text" placeholder="Type a message" class="message-input">
        <button class="send-btn">Send</button>
      </div>
    `;


  const blockBtn = chatView.querySelector('.block');
  blockBtn.addEventListener('click', () => {
    chats.splice(chats.findIndex(c => c.name === chat.name), 1); // remove from data
    console.log(chats);
    chatView.remove();
    const chatDiv = document.querySelector(`.chat[data-chat-name="${chat.name}"]`);
    chatDiv.remove();
    if(chat.scammer ==1){
      numberOfScammers--;
    }
    else if (chat.scammer ==0){
      numberOfWrongIdentified++;
    }
    if (numberOfScammers == 0){
      let hackedMessage = gotHacked ? '<div class="hacked-warning">You also got hacked!</div>' : '';
      resultScreen.innerHTML = `
      <div>You won! You identified all the scammers in ${timerElement.textContent}!</div>
      <div>You also misidentified ${numberOfWrongIdentified} innocent people as scammers, be careful next time!</div>
      ${hackedMessage}
      `;
      document.body.appendChild(resultScreen);
      stopTimer();
    }
  });

  const input = chatView.querySelector('.message-input');
  const sendBtn = chatView.querySelector('.send-btn');
  const messagesContainer = chatView.querySelector('.messages');

  sendBtn.addEventListener('click', async () => {
    const userText = input.value.trim();
    if (!userText) return;

    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendBtn.click();
        input.value = "";
      }
    });

    // 1️⃣ Add user message to UI
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'message sent';
    userMsgDiv.innerHTML = `<div class="message-text">${userText}</div>`;
    messagesContainer.appendChild(userMsgDiv);

    input.value = "";

    // 2️⃣ Scroll down
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 3️⃣ Call Hugging Face model
  //  try {
   //   const response = await generator([
   //     { role: "system", content: 'Talk like a real person' },
    //    { role: "user", content: userText }
    //  ], { max_new_tokens: 128 });

    //  const aiText = response[0].generated_text.at(-1).content;

      // 4️⃣ Add AI response to UI
    //  const aiMsgDiv = document.createElement('div');
    //  aiMsgDiv.className = 'message received';
    //  aiMsgDiv.innerHTML = `<div class="message-text">${aiText}</div>`;
    //  messagesContainer.appendChild(aiMsgDiv);

      // 5️⃣ Scroll again
     // messagesContainer.scrollTop = messagesContainer.scrollHeight;

    //} catch (err) {
    //  console.error(err);

    //  const errorDiv = document.createElement('div');
    //  errorDiv.className = 'message received';
    //  errorDiv.innerHTML = `<div class="message-text">⚠️ Error generating response</div>`;
   //   messagesContainer.appendChild(errorDiv);
   // }
  });

  const images = chatView.querySelectorAll('.message-image');

  images.forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'image-modal';

      modal.innerHTML = `
      <i class="fa-solid fa-download download-btn"></i>
      <img src="${img.src}" class="modal-img">
    `;

      document.body.appendChild(modal);

      const modalImg = modal.querySelector('.modal-img');
      const downloadBtn = modal.querySelector('.download-btn');

      // 🎯 Move image with mouse
      modal.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40; // adjust strength
        const y = (e.clientY / window.innerHeight - 0.5) * 40;

        modalImg.style.transform = `scale(1.4) translate(${x}px, ${y}px)`;
      });

      // 📥 Download image
      downloadBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent closing modal
        triggerHack();
        gotHacked = true;
        console.log(gotHacked);
  downloadBtn.classList.add('downloading');

  setTimeout(() => {
    downloadBtn.style.display = "none";
  }, 1000);
      });

      // ❌ Close modal when clicking outside
      modal.addEventListener('click', () => {
        modal.remove();
      });
    });
  });

  chatView.style.display = 'none';
  chatSpace.appendChild(chatView);
});

const homeScreen = document.querySelector('.logo')

homeScreen.addEventListener('click', () => {
  window.location.href = "index.html";
});