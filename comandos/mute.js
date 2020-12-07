module.exports = (client, message, args) => { 
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      let persona = message.mentions.members.first() || message.member;
      persona.voice.setMute(true);
    }
    else {
      let persona = message.member;
      persona.voice.setMute(true);
    }
  }