import http from "http";
import dotenv from "dotenv";
import app from "./app.js";
import logger from "./logging/logger.js";
dotenv.config();
const server = http.createServer(app);
server.listen(process.env.APP_PORT, () => {
  console.log("server running");
  logger.info("server running");
});
