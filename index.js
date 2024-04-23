const TelegramBot = require('node-telegram-bot-api');

const token = "1703589564:AAHIv2RJkyrB0W_d-LE6819wMOuq8WpUuCs";

const bot = new TelegramBot(token, { polling: true });
bot.setMyCommands([
    {
        command: '/start',
        description: 'Botni ishga tushurish!'
    },
    {
        command: '/info',
        description:"O'zingiz haqida ma'lumot olish!😎"
    }
])
bot.on('message', async msg => {
    console.log(msg);
    const text = msg.text;
    const chatId = msg.chat.id;

    if(text === "/start"){
        return bot.sendMessage(chatId, `Assalomu Aleykum ${msg.from.first_name} .  Hush kelibsiz `);
    }
    if(text === "/info"){
        await bot.sendSticker(
            chatId,
            'https://tlgrm.eu/_/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/192/3.webp'
        );
        await bot.sendSticker(
            chatId,
            'https://tolipovjs.uz/person.png'
        );
        return bot.sendMessage(
            chatId,
            `Sizning telegram username @${msg.from.username}
Sizning telegram id ${msg.from.id}
Sizning telegram Ismingiz ${msg.from?.first_name}  
Sizning telegram familiyangiz ${msg.from?.last_name}
Sizda premum ${msg.from.is_premum? 'mavjud':'mavjud emas!'}
            `
        );
    }
});