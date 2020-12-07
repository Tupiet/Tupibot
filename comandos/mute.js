module.exports = (client, message, args) => { 
  let role = message.guild.roles.cache.find(r => r.name == "Muerto");
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      let persona = message.mentions.members.first() || message.member;

      persona.voice.setMute(true);
    }

    else {
      let persona = message.member;
      
      persona.voice.setMute(true);
    }
    
  
  }