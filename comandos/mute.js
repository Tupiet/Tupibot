module.exports = (client, message, args) => { 
    let persona = message.mentions.members.first() || message.member;

    let role = message.guild.roles.cache.find(r => r.name == "Muerto");

    persona.roles.add(role.id);

    message.channel.send(`${persona} ha obtenido el rol muerto`);
  
  }