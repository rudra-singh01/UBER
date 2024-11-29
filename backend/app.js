const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const DBConection = require('./db/dbConfig');
const userRoutes = require("./routes/user.routes")
DBConection()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes)

app.get('/', (req, res) => {
    res.send("hello")
});

module.exports = app;