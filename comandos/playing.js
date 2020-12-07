module.exports = (client, message, args) => { 
    let texto = args.join(' ');
    client.user.setActivity(texto, {type: "PLAYING"});
  
  }