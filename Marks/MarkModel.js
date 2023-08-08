const { default: mongoose, Aggregate } = require("mongoose");

class MarksModel {
    constructor() {
        this.schema = new mongoose.Schema({
            marks: { type: Number, required: true },
            subject: { type: mongoose.Types.ObjectId, required: true, ref: "tbl_subjects" },
            student: { type: mongoose.Types.ObjectId, required: true, ref: "tbl_students" },
            totalMarks: { type: Number, required: true, default: 100 }
        })
        this.marks = mongoose.model("tbl_marks ", this.schema)

    }

    InsertMarks(data) {
        return this.marks.create(data)
    }

    // Note: Aggregation is a method.
    // 1.How Aggregation works?
    // Ans: first operation done thy jay je tenu result aavse ana pr second operation thase

    // we will put filter in pipeline like $match

    GetResult(id) {

        const pipeline = [

            // First Filter\\ 
            {
                $match: { student: new mongoose.Types.ObjectId(id) }
            },

            {
                $lookup: {
                    from: "tbl_subjects",
                    localField: "subject",
                    foreignField: "_id",
                    as: "subject"
                }
            },

            {
                // convert array to object

               $unwind:"$subject"
            },

            {
            //   For Student commen & merge \\

                $group:{
                    _id:"$student",

                    totalMarks:{
                        $sum:"$totalMarks"
                    },

                     archivedMarks:{
                        $sum:"$marks"
                     },

                     percentage:{
                        $avg:"$marks"
                     },


                    subject:{
                        // $push:"$subject"
                        $push:{
                            $mergeObjects:[{marks:"$marks"},{name:"$subject.name"}]
                        }
                    },

                }
            },

            {
                $lookup: {
                    from: "tbl_students",
                    localField: "_id",
                    foreignField: "_id",
                    as: "student"
                }
            },

            {
                $unwind:"$student"
            },

            {
                $project:{
                    _id:0
                }
            }

        ]



        return this.marks.aggregate(pipeline)
    }

}

const marksModel = new MarksModel()
module.exports = marksModel
