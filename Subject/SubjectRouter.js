const { Router } = require("express");
const subjectController = require("./SubjectController");


const SubjectRouter = Router()

SubjectRouter.post("/insert", subjectController.addSubject)


module.exports = SubjectRouter