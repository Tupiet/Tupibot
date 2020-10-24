const Discord = require("discord.js");
const client = new Discord.Client();

let { readdirSync } = require('fs'); 

client.config = require("./config.js");

client.commandos = new Discord.Collection();

// COMANDOS

for(const file of readdirSync("./comandos")) {
  if (file.endsWith(".js")) {
    let fileName = file.substring(0, file.length-3);
    let fileContents = require("./comandos/${file}");

    client.commandos.set(fileName, fileContents);
  }
}

// EVENTOS

for (const file of readdirSync("./eventos")) {
  if (file.endsWith(".js")) {
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(".eventos/${file}");

<<<<<<< HEAD
    client.on(fileName, fileContents.bind(null, client));

    delete require.cache[require.resolve("./eventos/${file}")];
=======
  if (message.author.bot) return;
  
  // Agafem el command (el de després del prefix)
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (message.content.startsWith("ping")) {
    let ping = Math.floor(message.client.ws.ping);
    message.channel.send(":ping_pong: `" + ping + " ms.` desde glitch.");
  } 
  
  switch (command) {
    case "aleix":
      message.channel.send("¡El mejor!");
      break;
    case "ping":
      message.channel.send("¡Pong!");
      break;
    case "purge":
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (args[0] == null) {
          message.channel.send("¡Necesito saber cuántos mensajes quieres eliminar! Por ejemplo, así: `!purge`")
        } else {
          message.channel.bulkDelete(args[0]);
        }
        
      }
      
      break;
    case "jacob": 
      message.channel.send("Un gran amigo. ^^");
      break;
    case "tupi":
      message.channel.send("¡La mejor tortuga! :turtle:")
      break;
>>>>>>> parent of 43bc7fd... purge update
  }
}

// LOGIN

client.login(process.env.TOKEN)
  .then(() => {
    console.log(`Estoy listo, soy ${client.user.tag}`);
  })
  .catch((err) => {
    console.error("Error al iniciar sesión: " + err);
  }
  )