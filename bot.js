import TelegramBot from 'node-telegram-bot-api';
import { get } from 'request';
import m2 from 'cheerio';
import m3 from 'iconv-lite';

const bot = new TelegramBot(getToken(), {polling: true});
const getToken = (function(){
    const token = process.env.TELEGRAM_TOKEN;
    return function() {
        return token;
    };
})();

var Aa = "오늘의 한강 수온은...";
var Bb = "도입니다.\nWould you want to join me?";

bot.onText(/\/today_hangang_temperature/, (msg) => {
    get({uri:"https://www.wpws.kr/hangang/"}, function (error, response, body) {

        const chatld = msg.chat.id;

        bot.sendMessage(chatld, body);
    });
});



bot.onText(/\/echo (.+)/, (msg, match) => {
    
    const chatId = msg.chat.id;
    const resp = match[1];
    
    bot.sendMessage(chatId, resp);
    
});