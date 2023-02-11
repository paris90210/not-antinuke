const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'about',
  aliases: ['info', 'botinfo'],
  run: async (client, message, args) => {
    const everyGuild = client.guilds.cache.map((guild) => guild.memberCount);
    const userCount = everyGuild.reduce((x, y) => x + y);
    
    message.reply({
      embeds: [new MessageEmbed()
      .setColor('PURPLE')
      .setDescription(`
**BOT INFO**
﹒Owner :: shooting star
﹒Library :: discord.js
﹒Latency :: ${client.ws.ping}ms
﹒Guilds :: ${client.guilds.cache.size.toLocaleString()}
﹒Users :: ${userCount.toLocaleString()}`)]
    })
  }
}
