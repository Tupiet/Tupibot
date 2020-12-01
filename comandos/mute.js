module.exports = (client, message, args) => { 
    let persona = message.mentions.users.first();
    if (!persona) persona = message.author;

    persona.roles.add("767023677844750367");

    message.channel.send(`${persona} ha obtenido el rol muerto`)
  
  }