const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
app.use(express.json());

const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN);

app.post(`/`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Bot is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
