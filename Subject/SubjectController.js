const subjectModel = require("./SubjectModel");

class SubjectController {

    async addSubject(req, res) {
        try {
            if (!req.body?.name) {
                return res.status(400).send({ message: "Missing Dependancy Name" })
            }

            const result = await subjectModel.InsertSubject(req.body)

            if (!result) {
                return res.status(500).send({ message: "Somthing went wrong" })
            }
            return res.status(200).send({ message: "Success" })


        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server error" })

        }
    }
}

const subjectController = new SubjectController()


module.exports = subjectController