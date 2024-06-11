const express = require('express');
const app  = express();
const portnum = 8088;
const linebot = require('linebot');
const axios = require('axios');
//const mongoose = require('mongoose);//需要裝mogodb
const bodyParser = require('body-parser');
const line = require('@line/bot-sdk');
let UserName , UserID ;
let OrderUserName , OrderUserID; //儲存目前要送訂單的人的資訊
let ServerCanOrder=true;       //一次只能一人訂餐

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '2005586122',
  channelSecret: 'ff6873334a9fab9d7a3c4e09333d2091',
  channelAccessToken: 'LrkyVVTLBV8QnMUiA/SaLDqvq916OhpekbUttrkbfj2JkLakasIBm0u6m3G/sFcpxNc7tfRCCsBvg7+SOVaSK65ABfForE6jijv/Xw5mElKIL4Tvy+3RxZHL3cMOGuentjX4thMuBqFhzl8xyLCTgAdB04t89/1O/w1cDnyilFU='
});

//const linebotParser =bot.parser();
//var jsonParser = bodyParser.json();
//const client = new line.Client({
  //channelAccessToken: 'LrkyVVTLBV8QnMUiA/SaLDqvq916OhpekbUttrkbfj2JkLakasIBm0u6m3G/sFcpxNc7tfRCCsBvg7+SOVaSK65ABfForE6jijv/Xw5mElKIL4Tvy+3RxZHL3cMOGuentjX4thMuBqFhzl8xyLCTgAdB04t89/1O/w1cDnyilFU='
//})
//app.post('/linewebhook',linebotParser);

//使用者加入好友
/*bot.on('follow',function(event){
  client.getProfile(event.source.userId)
		.then((profile) => {
			UserID = event.source.userId;
			UserName = profi  
      console.log(profile.displayName); //顯示使用者名字
      console.log(profile.userId);
      console.log(profile.pictureUrl); // 顯示使用者大頭照網址
      console.log(profile.statusMessage) // 使用者自介內容le.displayName;

		})
		.catch((err) => {
			// error handling
		});
	event.reply('需要點餐請先登入，登入格式為：ROOM房號-密碼\n密碼可於您的房卡上找到！');
})*/
//test
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  var replyMsg = `Hello你剛才說的是:${event.message.text}`;
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});



app.listen(process.env.PORT||30,function (){
    console.log("server is running at localhsot");
})
