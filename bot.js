const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(getToken(), {polling: true});

const getToken = (function(){
    const token = process.env.TELEGRAM_TOKEN;
    return function() {
        return token;
    };
})();

var Aa = "오늘의 한강 수온은...";
var Bb = "도네요. 함께가자!";

bot.onText(/\/today_hangang_temperature (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];

    if(resp == " ") {
        bot.sendMessage(chatId, 'oh, hello!');
    }

});

bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});