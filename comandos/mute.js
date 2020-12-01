module.exports = (client, message, args) => { 
    console.log(message.guild.members.cache.find((m) => m.user.username === args[0]))
    let persona = message.mentions.members.first() || // Usuario a quien se menciona (@Tupi)
    message.guild.members.cache.find((m) => m.user.username === args[0])[0]; // Apodo del usuario (Tupi)
    //message.member; // Usuario que ha enviado el mensaje

    let role = message.guild.roles.cache.find((r) => r.name == "Muerto"); // Busca un rol llamado "Muerto". 

    persona.roles.add(role.id);

    message.channel.send(`${persona} ha obtenido el rol muerto`);
  
  }