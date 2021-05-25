const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '.'
const fs = require('fs');
const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

 new Promise((resolve, reject) => {
     setTimeout(() => reject('woops'), 500);
   });

const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
for(const file of commandFiles){
        const command = require(`./commands/${file}`);

        client.commands.set(command.name, command);
}
client.once('ready', () => {
        console.log('ThePooL Is Online!')
        memberCounter(client)
});

client.on('message', message => {
 if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

//////////////////////////////////PING COMMAND////////////////////////////////////////////////
   if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
//////////////////////////////////RULES COMMAND////////////////////////////////////////////////
   }else if (command == 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
 //////////////////////////////////PURGE COMMAND////////////////////////////////////////////////
    }else if (command == 'purge'){
        client.commands.get('purge').execute(message, args, Discord);
 //////////////////////////////////KICK COMMAND////////////////////////////////////////////////
    }else if (command == 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
//////////////////////////////////BAN COMMAND////////////////////////////////////////////////
    }else if (command == 'ban'){
        client.commands.get('ban').execute(message, args, Discord);
//////////////////////////////////REACTION ROLES COMMAND////////////////////////////////////////////////
    }else if (command == 'reactionroles'){
        client.commands.get('reactionroles').execute(message, args, Discord, client);
    }
});










client.login(process.env.DISCORD_TOKEN);