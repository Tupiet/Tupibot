module.exports = (client, message, args) => { 
  let role = message.guild.roles.cache.find(r => r.name == "Muerto");
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      let persona = message.mentions.members.first() || message.member;

      persona.roles.add(role.id);

      message.channel.send(`${persona} ha obtenido el rol muerto`);
    }

    else {
      let persona = message.member;
      persona.roles.add(role.id);

      message.channel.send(`${persona} ha obtenido el rol muerto`);
    }
    
  
  }