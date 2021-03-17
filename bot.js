console.log("hello!");

require("dotenv").config();

global.subsListYT = [];
global.subsListTwitch = [];

const commandHandler = require('./commands.js');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on('ready', onReady);

function onReady() {
    console.log("On!");
}

client.on('message', commandHandler);