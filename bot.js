const TelegramBot = require('node-telegram-bot-api');

const getToken = (function(){
    const token = process.env.TELEGRAM_TOKEN;
    return function() {
        return token;
    };
})();

//var Aa = "오늘의 한강 수온은...";
//var Bb = "도네요. 함께가자!";

const bot = new TelegramBot(getToken(), {polling: true});

bot.onText(/\/today_hangang_temperature/, (msg) => {
	const chatld = msg.chat.id;
	
	bot.sendMessage(chatld, 'Hi');
});

bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

bot.onText(/\/echo@hangangboy (.+)/, (msg, match) => {
	const chatld = msg.chat.id;
	const resp = match[1];
	
	bot.sendMessage(chatld, resp);
});