const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const cors = require("cors");
const socket = require("./sockets/socket");

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);
const chatHistory = []; 


socket(io, chatHistory);

app.use(cors());
app.use("/", express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
    console.log("Servidor en: http://localhost:" + port);
});
