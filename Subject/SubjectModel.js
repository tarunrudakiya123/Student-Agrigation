const { default: mongoose } = require("mongoose");

class SubjectModel {

    constructor() {
        this.schema = new mongoose.Schema({
            name: { type: String, required: true, unique: true },
            
        })

        this.subject = mongoose.model("tbl_subject", this.schema)
    }


    InsertSubject(data){
        return this.subject.create(data)
    }
}

const subjectModel = new SubjectModel()
module.exports = subjectModel