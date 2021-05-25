module.exports = {
    name: 'rules',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD700')
        .setTitle('Rules')
        .addFields(
            {name: 'Welcome To ThePooL', value: 'We are a community of traders with several years of experience in trading and investing. Below are the rules to follow.'},
            {name: '1 - Overview', value: 'The following rules must be followed by everyone that participates on the Discord. The server is in full compliance with the Discord Community Guidelines and follows all protocols set by Discord. You must be over the age of 13 to use this server. This is also an English only server. Read it here for more information: >https://discordapp.com/guidelines< or here >https://discord.com/new/safety<'},
            {name: '2 -  Leave your ego at the door', value: 'Don not bring your ego into trading or this community. It will not benefit you in the long run. We have created a community that helps each other and does not put ego over helping one another'},
            {name: '3 - Your trades are your own', value: 'No one forced you into a trade. You decided that was a good entry or exit on a security you entered. All PT (Price Targets) listed by anyone in the room is their own. Have your own plan for your trades and trade your plan. We cannot guarantee the movement of a security in our favor nor should you expect it to only go in your direction.'},
            {name: '4 - No racist language allowed ', value: 'Please be nice to each other! No toxicity, Racism, homophobia, inappropriate language, and other forms of bigotry is not tolerated and will be dealt with accordingly. Keep your toxicity somewhere else, nobody wants it here. It is OK to have a couple of disagreements but please handle it in a mature manner and/or take it to the DMs. Discussion of moderator actions and any forms of disrespect to staff is not tolerated. Please also do not ghost ping. USING THE N-WORD OR ANY RACIST LANGUAGE IS NOT ALLOWED AND WILL RESULT IN A WARN FOLLOWED BY A BAN. You get 1 warning only.'},
            {name: '5 - Trading hours (4 AM - 8 PM EST) ', value: 'Keep trading hours to talk about trading only on the #main-trading-floor-💵 or any other rooms where we trade and share ideas. We are here to trade, make money, learn, and help educate others. That is the only goal.'},
            {name: '6 - Do not do any of this', value: '- Posting links to social media pages, referral links, other chatrooms, self promotion OR any link requiring the purchase of something \n - Posting FALSE information, even as a joke. Providing data in the chatroom about a ticker must be met with evidence and proof of it.\n - Posting any porn, racist, sexist, or other overly offensive material at any time or in any of the channels. \n - Insulting any member with a role by calling them "front loaders" "FURU", "pumpers", etc. \n - Asking for price targets.\n- Asking if it’s too late to enter a stock. \n- "Pumping" any stock you are in, which WILL be at the discretion of mods. \n- Posting a ticker without context. Every ticker post should be informative and have a reason why you are bringing it up not just "XYZ", add information!'},
            {name: 'Pt 2', value: "- Spamming the chat with emojis, gifs or random pictures. \n- Personally attack other members and picking fights with other members . Always keep conversations respectful and friendly. Take arguments to DMs   \n- Personally attacking traders on twitter, stocktwits, or other discord rooms, etc."}
        )
        .setImage('https://photos.google.com/photo/AF1QipO9EKik2TgpknpcZf8k3vt1bM5spbd8QrfhDq8_')
        .setFooter('ThePooL');

        message.channel.send(newEmbed);

    }
}