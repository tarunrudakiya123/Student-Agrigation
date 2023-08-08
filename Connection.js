const { default: mongoose } = require("mongoose");

async function ConnectDb(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/student_result")
        console.log("Db connected");

    } catch (error) {
        console.log("Db connection Loss");
    }
}

module.exports = ConnectDb