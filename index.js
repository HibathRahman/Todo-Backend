const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
connectDB();
const todoRouter = require("./router/todorouter");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cors());

app.use("/todoapp", todoRouter);

app.listen(PORT, () => console.log(`PORT is running om ${PORT}`));
