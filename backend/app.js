const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const app = express();
const DBConection = require('./db/dbConfig');
const userRoutes = require("./routes/user.routes")
const captainRoutes = require("./routes/captain.routes")
const mapsRoutes = require("./routes/maps.routes")     
DBConection()

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes)
app.use("/captains",captainRoutes)
app.use("/maps",mapsRoutes)

app.get('/', (req, res) => {
    res.send("hello")
});

module.exports = app;