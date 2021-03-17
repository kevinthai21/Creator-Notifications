console.log("hello!");

require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on('ready', onReady);

function onReady() {
    console.log("On!");
}

client.on('message', gotMessage);

function gotMessage(msg) {
    if (msg.content == 'hello') {
        msg.channel.send('What up');
    }
}