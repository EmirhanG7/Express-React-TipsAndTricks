const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        console.log("MongoDB Connection Successful");
    })
    .catch(err => {
        console.error(err);
    })
}

module.exports = connectDatabase;