module.exports = (client, message, args) => { 
    let persona = message.mentions.members.first();
    if (!persona) persona = message.author;

    persona.roles.add("783366049901838357").catch(console.error);

    message.channel.send(`${persona} ha obtenido el rol muerto`);
  
  }