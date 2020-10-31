module.exports = (client, message, args) => { 
    let SQLCreate = "CREATE TABLE IF NOT EXISTS usuarios (idusuario TEXT, nivel INTEGER, exp INTEGER)";
    db.run(SQLCreate, function(err) {
    if (err) return console.error(err.message)
})

let SQLInsert = "INSERT INTO usuarios(idusuario, nivel, exp) VALUES('123456789', 0, 1)";

db.run(SQLInsert, function(err) {
    if (err) return console.error(err.message)
})

let SQLSelect = "SELECT * FROM usuarios WHERE idusuario = '123456789'";

db.get(SQLSelect, (err, filas) => {
    if (err) return console.error(err.message)
    if (!filas) return; // aqui validamos si no existen datos del usuario solicitado por id que retorne nada.

    message.channel.send(filas); 
})
  
  }