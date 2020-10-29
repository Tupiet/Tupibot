module.exports = (client, message, args) => { 
    client.users.fetch(user.id).then((user) => {
        user.send("My Message");
    });
  
  }