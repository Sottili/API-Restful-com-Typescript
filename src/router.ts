import { Router, Request, Response } from "express";
import {
  createMovie,
  findMovieById,
  getAllMovies,
} from "./controllers/movieControllers";

//Validations
import { validate } from "./middleware/handleValidation";

const router = Router();

export default router
  .get("/teste", (req: Request, res: Response) => {
    res.status(200).send("Api Working!");
  })
  .post("/movie", validate, createMovie)
  .get("movie/:id", findMovieById)
  .get("movie", getAllMovies);
