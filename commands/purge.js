module.exports = {
    name: 'purge',
    description: "purge messages",
    async execute(message, args, Discord) {

        
        if(message.member.roles.cache.has('846424376106942474')){

            if(!args[0]) return message.reply("Please specify the amount of messages to purge!");
            if(isNaN(args[0])) return message.reply('Please enter a real number!');
            if(args[0] > 100) return message.reply("Exceeds purge cap. Please specify a number less than 100");
            if(args[0] < 1) return message.reply("You must purge atleast 1 message");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages); 
            return message.reply("Purged messages!");
        });
    } else {
        message.channel.send('You Do Not Have Permissions For This Command!');
    }
    }
}