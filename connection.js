const mongoose = require("mongoose");
const mongoUrl = require("./keys");

async function connectMongoDb() {
    return mongoose.connect(mongoUrl).then(()=>{
        console.log("mongoDb connected !!");
    }).catch((err) => console.log("Mongo error : ",err));
}

module.exports = {
    connectMongoDb
};
