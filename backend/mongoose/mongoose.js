const mongoose = require('mongoose')
const connect = async (url) => {
    return mongoose.connect(url)
}


module.exports = connect;
