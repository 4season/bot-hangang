const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

const bot = new TelegramBot(getToken(), {polling: true});
const getToken = (function(){
    const token = process.env.TELEGRAM_TOKEN;
    return function() {
        return token;
    };
})();

var Aa = "오늘의 한강 수온은...";
var Bb = "도입니다.";

var requestOptions = { 
    method: "GET" ,uri: "https://www.wpws.kr/hangang/" ,
    headers: { "User-Agent": "Mozilla/5.0" } ,
    encoding: null 
};


bot.onText(/\/today_hangang_temperature/, (msg) => {
    request(requestOptions, function(error, response, body) {

        var strContents = new Buffer(body);
        const chatld = msg.chat.id;
        
        bot.sendMessage(chatld, iconv.decode(strContents, 'EUC-KR').toString()); 

    });
});



bot.onText(/\/echo (.+)/, (msg, match) => {
    
    const chatId = msg.chat.id;
    const resp = match[1];
    
    bot.sendMessage(chatId, resp);
    
});