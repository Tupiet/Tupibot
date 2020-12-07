module.exports = (client, message, args) => { 
    let texto = args.join(' ');
    bot.user.setActivity(texto, {type: "PLAYING"});
  
  }