import express from "express";
import userRoutes from "./routes/userRoutes";
import { logger } from "./middlewares/logger";

const app = express();

app.use(logger); //middleware global
app.use("/users", userRoutes);
app.listen(3000, () => {console.log("Servidor TS rodando no porta 3000 XD");
});