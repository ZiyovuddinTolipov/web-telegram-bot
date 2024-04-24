const TelegramBot = require('node-telegram-bot-api');

const token = "1703589564:AAHIv2RJkyrB0W_d-LE6819wMOuq8WpUuCs";

const bot = new TelegramBot(token, { polling: true });

const obj = {};

const gameOptions = {
    reply_markup:{
        inline_keyboard: [
            [
                {
                    text: "1",
                    callback_data: "1"
                },
                {
                    text: "2",
                    callback_data: "2"
                },
                {
                    text: "3",
                    callback_data: "3"
                }
            ],
            [
                {
                    text: "4",
                    callback_data: "5"
                },
                {
                    text: "5",
                    callback_data: "5"
                },
                {
                    text: "6",
                    callback_data: "6"
                }
            ],
            [
                {
                    text: "7",
                    callback_data: "7"
                },
                {
                    text: "8",
                    callback_data: "8"
                },
                {
                    text: "9",
                    callback_data: "9"
                }
            ],
            [
                {
                    text:'0',
                    callback_data: "0"
                }
            ]
        ]
    }
}

const bootstrap = () => {
    bot.setMyCommands([
        {
            command: '/start',
            description: 'Botni ishga tushurish!'
        },
        {
            command: '/info',
            description: "O'zingiz haqida ma'lumot olish!😎"
        },
        {
            command: '/game',
            description: "O'yin o'ynash."
        }
    ])


    bot.on('message', async msg => {
        console.log(msg);
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === "/start") {
            return bot.sendMessage(chatId, `Assalomu Aleykum ${msg.from.first_name} .  Hush kelibsiz `);
        }
        if (text === "/info") {
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
    Sizda premum ${msg.from.is_premum ? 'mavjud' : 'mavjud emas!'}
                `
            );
        }

        if (text === "/game") {
            await bot.sendMessage(chatId, "Kompyuter 0 dan 9 gacha son o'yladi siz ushbu sonni toping!")
            const randomNumber = Math.floor(Math.random() * 10);
            obj[chatId] = randomNumber;
            return bot.sendMessage(chatId, "tog'ri sonni toping!", gameOptions);
        }

        bot.sendMessage(chatId, 'Uzur men siz tushunmayabman!');
    });
};
bootstrap();