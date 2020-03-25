const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

myEmitter.emit("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: rupesh");
});

myEmitter.on("newSale", stock => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

/////////////////////////////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another Request received");
});

server.on("close", (req, res) => {
  console.log("Server Closed!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
