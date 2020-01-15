const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.45',
    port: 50541
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    process.stdout.write("Your name: ");
    process.stdin.on('data', (data) => {
      conn.write(`Name: ${data}`)
    })
  })
  conn.on('data', (data) => {
    console.log(data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}




module.exports = { connect };
