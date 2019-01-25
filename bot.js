const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const fetch = require('node-fetch');

const bot = new TelegramBot(getToken(), {polling: true});
const getToken = (function(){
    const token = process.env.TELEGRAM_TOKEN;
    return function() {
        return token;
    };
})();

var Aa = "오늘의 한강 수온은...";
var Bb = "도입니다. 혹시 시간되신다면 저랑 함께하실래요?";
var Cc = "오늘은 날이 아닌가봅니다... 독서실이나 가죠.";

bot.onText(/\/today_hangang_temperature/, (msg) => {
	
	const chatld = msg.chat.id;
	
	request('node-fetch')('http://hangang.dkserver.wo.tc/', function(error, response, body) {
		.then(res => res.json())
		.then(json => {
			if(json.result) {
				bot.sendMessage(chatld, Aa + {json["temp"]} + Bb);
				}
				else {
					bot.sendMessage(chatld, Cc);
					}
			});
});



bot.onText(/\/echo (.+)/, (msg, match) => {
    
    const chatId = msg.chat.id;
    const resp = match[1];
    
    bot.sendMessage(chatId, resp);
    
});