
module.exports = (client, message, args) => { 
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (args[0] == null) {
          message.channel.send("¡Necesito saber cuántos mensajes quieres eliminar! Por ejemplo, así: `!purge 5`")
        } else {
          message.channel
          .bulkDelete(args[0] + 1)
          .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
          .catch(console.error);
        }
        
    }
  
  }

