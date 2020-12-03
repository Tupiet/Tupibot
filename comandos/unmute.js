module.exports = (client, message, args) => { 
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let role = message.guild.roles.cache.find((r) => r.name == "Muerto"); // Busca un rol llamado "Muerto". 
        message.guild.members.cache.forEach(member => {
        member.roles.remove(role.id);
      });
      message.channel.send("Todos los usuarios han sido desmuteados.");
    }
    
  }

