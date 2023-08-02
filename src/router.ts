import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";

//Validations
import { validate } from "./middleware/handleValidation";

const router = Router();

export default router
  .get("/teste", (req: Request, res: Response) => {
    res.status(200).send("Api Working!");
  })
  .post("/movie", validate, createMovie);
