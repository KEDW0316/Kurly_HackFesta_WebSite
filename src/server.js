import express from "express";
import rootRouter from "./routers/rootRouter";
import morgan from "morgan";
var path = require("path");

const PORT = 4000;
const app = express();

const logger = morgan("dev");

app.set("view engine", "ejs");
app.set("views", process.cwd() + "/src/views");
app.use(express.static(path.join(__dirname, "client")));

app.use(logger);

app.use("/", rootRouter);

export default app;
