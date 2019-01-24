const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(getToken(), {polling: true});

const getToken = (function(){
    const token = process.env.TELEGRAM_TOKEN;
    return function() {
        return token;
    };
})();

var Aa = "오늘의 한강 수온은...";
var Bb = "도입니다.\nWould you want to join me?";
var arrNumber = new Array();

const router = express.Router();
const request = require('request');
  
request("https://www.wpws.kr/hangang/", function(error, response, body){
    	
	arrNumber[0] = body;
	
});

bot.onText(/\/today_hangang_temperature/, (msg) => {
	
	const chatld = msg.chat.id;
	
	bot.sendMessage(chatld, arrNumber[0]);
	arrNumber.length = 0;
	
});

bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
    
});