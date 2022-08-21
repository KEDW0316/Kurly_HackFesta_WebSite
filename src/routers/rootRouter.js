import express from "express";
import { home } from "../controllers/mapController.js";

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;
