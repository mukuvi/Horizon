import express from "express";
import { getAllData } from "../controllers/getAllData";
import { getDataByPathParams } from "../controllers/getDataByPathParams";

export const apiRouter = express.Router();

apiRouter.get("/", getAllData);

apiRouter.get("/:field/:term", getDataByPathParams);
