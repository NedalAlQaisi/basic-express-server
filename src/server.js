"use strict";

const express = require("express");
const app = express();
const logger = require('./middleware/logger.js')
const validator = require('./middleware/validator.js')
const notFound = require('./error-handlers/404.js')
const errorHandler = require('./error-handlers/500.js')
const cors = require('cors')


app.use(logger)

app.use(express.json())

app.use(cors())


app.get('/person', validator, (req, res) => {
    console.log(req.reqName)
    res.json({ name: `${req.reqName}` })
})


app.use('*', notFound)

app.use(errorHandler)

const start = (port) => {
    app.listen(port, () => {
        console.log(`The port is : ${port}`);
    });
};

module.exports = {
    app: app,
    start: start,
};