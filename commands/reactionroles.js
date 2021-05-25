module.exports = {
    name: 'reactionroles',
    description: "Sets up a reaction role message",
    async execute(message, args, Discord, client) {
        const channel = '820725588662288397';
        const testRole = message.guild.roles.cache.find(role => role.name === "test");

        const testEmoji = '🤑';

        let embed = new Discord.MessageEmbed()
            .setColor('#FFD700')
            .setTitle('Click The Emojis to Subscribe to Alerts!')
            .setDescription('If there is a post in a channel and you are subscribed to it then you will recieve a push notification!\n\n'
            + `${testEmoji} --------> for test`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(testEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === testEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(testRole);
                }
            } else {
                return;
            }    

        });

        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === testEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(testRole);
                }
            } else {
                return;
            }
        });
    }

}