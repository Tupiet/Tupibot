const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = "!";

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

client.on("message", message => {
  // Revisa si el missatge NO conté el prefix o si el mateix autor és un bot.
  // Per tant, tot el que no tingui un prefix no funcionarà.  
  
  if (message.author.bot) return;
  
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
      message.channel.bulkDelete(100);
  }
});

client.login(process.env.TOKEN);
