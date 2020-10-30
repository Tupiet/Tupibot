module.exports = (client, message) => {
    let canal = client.channels.cache.get('ID-CANAL'); 
    canal.send(`**${message.author.username}** elimino un mensaje con el contenido: ${message}`);
  
  }