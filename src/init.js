import express from "express";

import app from "./server.js";
import "dotenv/config";

const PORT = process.env.PORT || 5000;

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
