const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function(callback) {
  const conn = net.createConnection({ 
    host: '192.168.88.45',
    port: 50541
  });
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    process.stdout.write("Your name: ");
    const getName = (data) => {
      conn.write(`Name: ${data}`);
      process.stdin.removeListener('data', getName);
      callback(conn);
    }
    process.stdin.on('data', getName)
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  // interpret incoming data as text

  return conn;
}




module.exports = { connect };
