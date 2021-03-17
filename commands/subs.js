module.exports = function (msg, args) {
    console.log("subscription");

    if (!subsListYT.length && !subsListTwitch.length) 
        msg.channel.send("No creators are being followed!");

    if (subsListYT.length > 0) {
        msg.channel.send("Followed YouTube creators:");
        msg.channel.send(subsListYT);
    }
    if (subsListTwitch.length > 0) {
        msg.channel.send("Followed Twitch streamers:");
        msg.channel.send(subsListTwitch);
    }

}