module.exports = (client, message, args) => { 
    let persona = message.mentions.users.first();
    if (!persona) persona = message.author;

    persona.roles.add("783366049901838357");

    message.channel.send(`${persona} ha obtenido el rol muerto`);
  
  }