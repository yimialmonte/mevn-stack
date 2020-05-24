const express = require('express')
const mongoose = require('mongoose')
const { databaseUrl } = require('../config/index')

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()

app.listen(3000, () => {
    console.log('Server started succesfully')
})
