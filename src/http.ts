import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path"
import "./database";

import { routes } from "./routes";

const app = express();

//Para utilizar o html 
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html")
})

const http = createServer(app); // Criando Protocolo http
const io = new Server(http);  // Criando protocolo websocket

io.on("connection", (socket: Socket) => {
    // console.log("Se conectou", socket.id);
})

// GET Buscas 
// POST Criação
// PUT Alteração
// DELETE Deletar
// Aterar uma informção especifica

app.use(express.json());

app.use(routes);

export { http, io };