import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PageNotFound } from "./middlewares/ErrorHandling.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(PageNotFound);
export default app;
