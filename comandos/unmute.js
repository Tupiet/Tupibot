module.exports = (client, message, args) => { 
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.members.forEach(member => {
        member.voice.setMute(false);
      });
    }
  }

