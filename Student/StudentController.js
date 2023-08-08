const studentModel = require("./StudentModel");

class StudentController {
    async addStudent(req, res) {
        try {
            let { name, std } = req.body
            if (!name) return res.status(400).send({ message: "Missing dependancy Name" })
            if (!std) return res.status(400).send({ message: "Missing dependancy std" })

            const result = await studentModel.creatStudent(req.body)

            // console.log(result);

            if (result) {
                return res.status({ message: "Success" })
            }
            return res.status(500).send({ message: "Somthing went wrong" })

        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal server error" })

        }
    }
}

const studentController = new StudentController()
module.exports = studentController