import express from "express";
import cars from "../../cars.js";

const carsRouter = express.Router();

carsRouter.get("/", (req, res) => {
  //   res.send(cars);
  res.json(cars);
});

carsRouter.get("/:id", (req, res) => {
  //   res.send(cars);
  res.json(cars[0]);
});

carsRouter.delete("/:id", (req, res) => {
  //   res.send(cars);
  res.json(cars[0]);
});

export default carsRouter;
