module.exports = {
    name: 'kick',
    description: "kick members",
    execute(message, args) {
        if(message.member.roles.cache.has('846424376106942474')){

        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send('You could not kick that member');
        }


    }else {
        message.channel.send('You Do Not Have Permissions For This Command!');
    }
}
}