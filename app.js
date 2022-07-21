const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();

const postsRoutes = require("./routes/posts");
const userRotues = require("./routes/users");

mongoose
    .connect('mongodb://localhost:27017/angularmegaproject')
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
    next();
});

app.use("/api/users",userRotues);
app.use("/api/posts", postsRoutes);
module.exports = app;