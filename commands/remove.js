function remove (list, item){
    var index = list.indexOf(item);
    if (index != -1) {
        list.splice(index, 1);
        return 1;
    }
    else { msg.channel.send("Failed to remove."); return 0; }
}

module.exports = function (msg, args) {
    console.log(msg.content);
    let tokens = msg.content.split(' ');
    if(tokens[1] == "yt")
    {
        var value = remove(subsListYT, tokens[2]);
        if (value == 1) msg.channel.send("Successfully deleted `" + tokens[2] + "` !");
    }
    if(tokens[1] == "twitch")
    {
        var value = remove(subsListTwitch,tokens[2]);
        if (value == 1) msg.channel.send("Successfully deleted `" + tokens[2] + "` !");
    }
}