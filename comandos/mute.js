module.exports = (client, message, args) => { 
    let persona = message.mentions.members.first() || message.member;

    persona.roles.add("783366049901838357");

    message.channel.send(`${persona} ha obtenido el rol muerto`);
  
  }