const TelegramBot = require('node-telegram-bot-api');
const m1 = require('request');
const m2 = require('cheerio');
const m3 = require('iconv-lite');

const bot = new TelegramBot(getToken(), {polling: true});
const chatld = msg.chat.id;
const router = express.Router();
const getToken = (function(){
    const token = process.env.TELEGRAM_TOKEN;
    return function() {
        return token;
    };
})();

var Aa = "오늘의 한강 수온은...";
var Bb = "도입니다.\nWould you want to join me?";

bot.onText(/\/today_hangang_temperature/, (msg) => {
	m1("https://www.wpws.kr/hangang/", function(error, response, body){

    bot.sendMessage(chatld, body);
    
	});
});


bot.onText(/\/echo (.+)/, (msg, match) => {
	
    const resp = match[1];
    
    bot.sendMessage(chatId, resp);
    
});