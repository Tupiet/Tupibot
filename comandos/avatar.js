module.exports = (client, message, args) => { 
    let persona = message.mentions.users.first();
    if (!persona) persona = message.author;
   
    let embed = new Discord.MessageEmbed()
      .setImage(`${persona.displayAvatarURL()}`)
      .setColor(0x66b3ff)
      .setFooter(`Avatar de ${persona.username.tag}`)
   
    message.channel.send(embed)
   
   }
   