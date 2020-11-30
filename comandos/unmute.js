module.exports = (client, message, args) => { 
    message.guild.members.cache.forEach(member => {
        member.roles.remove("767023677844750367");
      });
      message.channel.send("Todos los usuarios han sido desmuteados.");
  }

