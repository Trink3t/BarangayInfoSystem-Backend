import express from "express";
import morgan from "morgan";
import routes from "./routes";
import cookieParser from "cookie-parser";
// import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", routes);

// app.use(errorHandler);

export default app;
