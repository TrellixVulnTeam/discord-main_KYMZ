module.exports = async (client) =>{
    const guild = client.guilds.cache.get('820725588112310293');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('846223938865463337');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 900000);
}