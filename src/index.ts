import { AppDataSource } from "./data-source";
import { expression } from "joi";
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized.");

    app.get("/", (req, res) => {
      res.send("Hello from Express + TypeORM + tsx!");
    });

    app.listen(process.env.port, () => {
      console.log(`Server running on http://localhost:${process.env.port}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });
