import express from "express";
import carsRouter from "./routes/api/cars-router";
// import moment from "moment";
import logger from "morgan";
import cors from "cors";
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");

  next();
});

app.use("/api/cars", carsRouter);

// app.get("/", (req, res) => {
//   const date = moment().format("hh:mm:ss");
//   res.send(`<p>Hello World! ${req.method} ${date}</p>`);
// });

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
