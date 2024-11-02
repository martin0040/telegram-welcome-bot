const TelegramBot = require('node-telegram-bot-api')

// Replace with your bot token
const token = '7148631886:AAF7yzJMQs6_n_iH72ouc-DDn_Pq1zOOO4Y';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  console.log(msg);
})

// Handle '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! How can I assist you today?');
});

// Handle '/bid' command
bot.onText(/\/bid/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Hi dear client.
How are you doing well!
I have just read your requirement carefully.
🔥 In particular, I have rich 
experience in web program development using JavaScript frameworks such as NodeJS, VueJS, ReactJS, NextJs, Socket.io,React-Native, AngularJS,C/C++, Python, Django and using PHP frameworks such as Laravel and CodeIgniter, Shopify, WordPress, RoundCube
iPad.
🔥 And I have strong skills in the development of Mobile apps using Flutter and React native.

My Good Points For Service:
I'm pragmatic and creative in building software. I can simplify and get things done quickly with a demonstrated track record of building and delivering high-quality software.
I have a passion for making your ideas a reality, building prototypes and ultimately launching production-scale solutions in the market.
I am familiar with building clean, efficient, well-documented, well-structured, high-quality code projects.
Also, I am very well-versed in the agile approach in project development and really love to add my creativity to the overall project implementation.

My Basic Skill
Front-end development using React.js, Next.js, Vue
Back-end using Express, Laravel, Node.js, Nest.js
App(Android/IOS) Development using Flutter, React Native,
Database design, implementation, and management by MySQL,  MongoDB

portfolio: https://portfolio-martin-weld.vercel.app/
telegram: https://t.me/shiner1125
I assure you to give best quality work and 100% satisfaction with work.
Best Regards.
`);
});