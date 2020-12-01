module.exports = (client, message, args) => { 
    let persona = message.mentions.members.first() || 
    message.guild.members.cache.find((m) => m.user.tag === args[0]) || 
    message.member;

    persona.roles.add("783366049901838357");

    message.channel.send(`${persona.name} ha obtenido el rol muerto`);
  
  }