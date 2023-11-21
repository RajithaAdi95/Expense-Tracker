const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const authRoutes = require("./routes/routers");

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors({ origin: 'http://localhost:3000' }));

// routes
app.use("", authRoutes);

// connect db
mongoose.connect("mongodb://localhost:27017/ExpenseTracker")
    .then(() => {
        console.log("MongoDB is connected");
    })
    .catch((err) => {
        console.log("Error in MongoDB connection", err);
    })

module.exports = app;