module.exports = (client, message, args) => { 
    let persona = message.mentions.members.first() || // Usuario a quien se menciona (@Tupi)
    message.guild.members.cache.find((m) => m.user.tag === args[0]); // Apodo del usuario (Tupi)
    //message.member; // Usuario que ha enviado el mensaje
    //message.guild.members;

    let role = message.guild.roles.cache.find((r) => r.name == "Muerto"); // Busca un rol llamado "Muerto". 

    persona.roles.add(role.id);

    message.channel.send(`${persona} ha obtenido el rol muerto`);
  
  }