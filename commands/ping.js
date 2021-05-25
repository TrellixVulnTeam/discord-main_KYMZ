module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args) {

            if(message.member.roles.cache.has('846424376106942474')){
                message.channel.send('pong!');
            
            } else {
                message.channel.send('You Do Not Have Permissions For This Command!');
                message.member.roles.add('846424376106942474').catch(console.error);
            }

          




    }
}