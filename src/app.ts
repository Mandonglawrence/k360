import express from "express";
import myConnection  from "./config/connection";
import cors from "cors";

myConnection();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
export default app;
      