module.exports = (client, message) => {
    let canal = client.channels.cache.get('768488095208570880'); 
    canal.send(`**${message.author.username}** elimino un mensaje con el contenido: ${message}`);
  
  }