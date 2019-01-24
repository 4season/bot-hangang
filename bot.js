const TelegramBot = require('node-telegram-bot-api');

const getToken = (function(){
    const token = process.env.TELEGRAM_TOKEN;
    return function() {
        return token;
    };
})();

var Aa = "오늘의 한강 수온은...";
var Bb = "도네요. 함께가자!";
var http = require('http');
var cheerio = require('cheerio');
var options = {
    hostname: 'www.wpws.kr/hangang'
  };

const bot = new TelegramBot(getToken(), {polling: true});

function handleResponse(response) {
  var serverData = '';
  response.on('data', function (chunk) {
    serverData += chunk;
  });
  response.on('end', function () {
 
    var $ = cheerio.load(serverData);
 
    var result = $(".bash").text();            // 클래스가 bash인 요소를 선택
    var result2 = result.replace(/(^\s+|\s+$)/g, ""); // 앞뒤의 화이트 스페이스를 제거
    console.log("Find by class : bash -> " + result2);
 
    result = $("#AUTHOR").text();                     // id가 AUTHOR인 요소를 선택
    result2 = result.replace(/(^\s+|\s+$)/g, "");     // 앞뒤의 화이트 스페이스를 제거
  });
}

bot.onText(/\/today_hangang_temperature/, (msg) => {
	const chatld = msg.chat.id;
	
	bot.sendMessage(chatld, handleResponse(response));
});

bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});