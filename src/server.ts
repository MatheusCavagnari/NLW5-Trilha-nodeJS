import express from "express";

import "./database";

import { routes } from "./routes";

const app = express();

// GET Buscas 
// POST Criação
// PUT Alteração
// DELETE Deletar
// Aterar uma informção especifica

app.use(express.json());

app.use(routes);


app.listen(3333, () => console.log("serve rodando"));