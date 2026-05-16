// JavaScript source code
const express = require(express);
const TelegramBot = require(node - telegram - bot - api);

const app = express();
app.use(express.json());

const TOKEN = process.env.BOT_TOKEN;  التوكن رح ناخدو من Render مش من الكود
const bot = new TelegramBot(TOKEN);

 هيك بنقول لتليجرام وين يبعت الرسائل
app.post(`bot${TOKEN}`, (req, res) = {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

 رسالة ترحيب لما حدا يكتب start
bot.onText(start, (msg) = {
    bot.sendMessage(msg.chat.id, أهلاً! البوت شغال تمام ✅);
});

 أي رسالة تانية
bot.on(message, (msg) = {
    if(msg.text && !msg.text.startsWith()) {
    bot.sendMessage(msg.chat.id, وصلت رسالتك + msg.text);
}
});

 Render بيحتاج سيرفر شغال على المنفذ اللي بيعطيه
const PORT = process.env.PORT  3000;
app.listen(PORT, () = {
    console.log(Server running on port, PORT);
});
