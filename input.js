let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}

const handleUserInput = function(stdin) {
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.stdout.write("Thanks for playing! \n")
      process.exit();
    }

    if (key === 'w') {
      connection.write("Move: up")
      //console.log("up");
    }

    if (key === 'a') {
      connection.write("Move: left")
      //console.log("left");
    }

    if (key === 's') {
      connection.write("Move: down")
      //console.log("down");
    }

    if (key === 'd') {
      connection.write("Move: right")
      //console.log("right");
    }

    if (key === 'h') {
      connection.write("Say: Hello!");
    }
  })
}



module.exports = { setupInput }; 