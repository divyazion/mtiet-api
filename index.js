const jsonServer = require("json-server");  //import json-server library
const server = jsonServer.create();
const router =jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port =process.env.PORT || 8080; // chose port from here like 8080, 3002

server.use(middlewares);
server.use(router);

server.listen(port);