const mongoose = require("mongoose")
require("dotenv").config()

const netconnect = mongoose.connect(process.env.mongoURL)


module.exports = {
    netconnect
}