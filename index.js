const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = "!";

// Determina què farà el bot un cop funcioni sense errors.
client.on("ready", () => {

  console.log("¡Conectado!");

  client.user.setPresence({
    status: "online",
    activity: {
      name: "Jota777 es guapo",
      type: "PLAYING"
    }
  });
  
});

// Cada cop que rebem un missatge:
client.on("message", message => {

  // Revisa si l'autor del missatge rebut és un bot.
  // Si és així, fa un return i ignora tot el següent.

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
      if (!args[0]) {
        message.channel.send("Por favor, introduce el número de mensajes a eliminar. ^^")
      }
      else if (!message.member.hasPermision("MANAGE_MESSAGES")) {
        message.channel.send("No tienes permisos. :(")
      }
      else {
        message.channel.bulkDelete(args[0]);
      }
      break;
    case "jacob": 
      message.channel.send("Un gran amigo. ^^");
      break;
    case "tupi":
      message.channel.send("¡La mejor tortuga! :turtle:")
      break;
  }
});

client.login(process.env.TOKEN);
