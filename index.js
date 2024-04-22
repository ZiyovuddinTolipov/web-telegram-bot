const TelegramBot = require('node-telegram-bot-api');

const token = "1703589564:AAHIv2RJkyrB0W_d-LE6819wMOuq8WpUuCs";

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    console.log(msg);
    const text = msg.text;
    const chatId = msg.chat.id;

    if(text === "/start"){
        bot.sendMessage(chatId, "Assalomu Aleykum Hush kelibsiz");
    }else {
        bot.sendMessage(chatId, "Ajoyib!");
    }
});