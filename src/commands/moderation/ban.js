const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    aliases: [],
    run: async (client, message, args) => {
     if (!message.member.permissions.has("BAN_MEMBERS")) {

    const noperms = new MessageEmbed()
      .setColor("PURPLE")
      .setDescription(`*${message.author.username},* you need **ban members** permission to run that command.`)
    // Sending
    message.channel.send({ embeds: [noperms]});

     } else {
       const person = message.mentions.members.first();
       
       if (!person) {
    const mentionfirst = new MessageEmbed()
      .setColor("BLACK")
      .setDescription(`*${message.author.username},* mention someone first.`)
    // Sending
    message.channel.send({ embeds: [mentionfirst]});
       }
       if (!person.bannable) {
    const bannable = new MessageEmbed()
      .setColor("RED")
      .setDescription(`*${message.author.username},* I am unable to ban that person.`)
    // Sending
    message.channel.send({ embeds: [bannable]});
         
       } else {
         var reason = args.slice(1).join(" ");
         if (!reason) reason = `banned by ${message.author.tag}`
         person.ban({ reason: `${reason}` });
         if (person.id !== client.userId) {
           
    const banned = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`done.`)
    // Sending
    message.channel.send({ embeds: [banned]});
           
         }
       }
     }
  },
};  
    