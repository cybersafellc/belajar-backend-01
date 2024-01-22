import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PageNotFound } from "./middlewares/ErrorHandling.js";
import apiV1Router from "./routes/apiV1.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(`/api/v1/`, apiV1Router);
app.use(PageNotFound);
export default app;
