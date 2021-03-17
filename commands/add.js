module.exports = function (msg, args) {
    console.log(msg.content);
    let tokens = msg.content.split(' ');

    if(tokens[1] == "yt")
    {
        subsListYT.push(tokens[2]);
        msg.channel.send("Successfully added `" + tokens[2] + "` !");
    }
    if(tokens[1] == "twitch")
    {
        subsListTwitch.push(tokens[2]);
        msg.channel.send("Successfully added `" + tokens[2] + "` in twitch's list!");
    }
    
}