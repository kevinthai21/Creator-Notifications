const subs = require('./commands/subs.js');
const add = require('./commands/add.js');
const remove = require('./commands/remove.js');


const commands = { subs, add, remove};

module.exports = async function (msg) {
    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) == '!') {
        command = command.substring(1);
        console.log("Command: " + command);
        commands[command](msg, tokens);
    }
}