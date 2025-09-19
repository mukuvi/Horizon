import express from "express";
import { getAllData } from "../controllers/getAlldata";
import { getDataByParams } from "../controllers/getDataByParams";

export const apiRouter = express.Router();

apiRouter.get("/", getAllData);
apiRouter.get("/:field/:term", getDataByParams);
