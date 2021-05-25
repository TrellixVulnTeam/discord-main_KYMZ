module.exports = {
    name: 'ban',
    description: "ban members",
    execute(message, args) {
        if(message.member.roles.cache.has('846424376106942474')){

        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send('You could not ban that member');
        }




    }else {
        message.channel.send('You Do Not Have Permissions For This Command!');
    }
    }
}