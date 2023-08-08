const marksModel = require("./MarkModel");

class MarksController {
    async addMarks(req, res) {
        try {
            const { marks, student, subject } = req.body


            if (!marks) return res.status(400).send({ messgae: "Missing dependacy Marks" })
            if (!student) return res.status(400).send({ messgae: "Missing dependacy student" })
            if (!subject) return res.status(400).send({ messgae: "Missing dependacy subject" })

            const result = await marksModel.InsertMarks(req.body)
            if (!result) return res.status(500).send({ messgae: "somthing went wrong" })
            
            return res.status(200).send({ messgae: "Success" })


        } catch (error) {
            return res.status(500).send({ messgae: "Internal Server Error" })
        }   
    }

    async ShowResult (req,res){
        try {
            const {id}=req.params
            
            if(!id) return res.status(400).send({messgae:"Missing Dependancy Id"})

            const result = await marksModel.GetResult(id)
            // console.log(result);
            
            if(result) return res.status(200).send({messgae:"Success", result})

            if (!result) return res.status(500).send({ messgae: "somthing went wrong" })


        } catch (error) {
            console.log(error);
            return res.status(500).send({ messgae: "Internal Server Error" })
        }
    }
}

const marksController = new MarksController()
module.exports = marksController