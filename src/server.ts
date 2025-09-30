import express, { Request, Response } from "express";
import process = require("process");

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World com Typescript e Express!");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})

