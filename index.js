require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});
const jsonFacebook = require('./template/information_facebook.json');

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    const buttons ={
        reply_markup:{
            inline_keyboard: [
                [
                    {text: 'Facebook', callback_data: '1'},
                    {text: 'Instagram', callback_data: '2'}
                ],
                [
                    {text: 'Youtube', callback_data: '3'}
                ]
            ]
        }
    }

    bot.sendMessage(chatId, '🤖☺️ Welcome, in this chatbot you can acquire Likes according to your publication or video that you want to boost!', buttons);
  });


bot.on('callback_query', function onCallbackQuery(query) {
    const data = query.data;
    const chatId = query.message.chat.id;

    switch (data) {
        case '1':
            bot.sendMessage(chatId, jsonFacebook.url.message);
        break;
        case '2':
            bot.sendMessage(chatId, 'Hello World! option 2');
        break;
        case '3':
            bot.sendMessage(chatId, 'Hello World! option 3');
        break;
    }
    
});



