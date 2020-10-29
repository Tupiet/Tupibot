module.exports = (client, message, args) => { 
    client.users.fetch("701825615388606515").then((user) => {
        user.send("My Message");
    });
  
  }