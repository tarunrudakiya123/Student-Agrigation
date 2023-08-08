
const express = require("express")
const marksController = require("./MarksController")

const MarksRouter = express.Router()

MarksRouter.post("/", marksController.addMarks)  

MarksRouter.get("/:id", marksController.ShowResult)

module.exports = MarksRouter

// student =  64ad1f1308bb96ac2f286717
// subject = 64ad495cef856cd60223eecb,
// 64ad4a0864f83b2801f1eb72,
// 64ad4a0f64f83b2801f1eb74,
// 64ad4a1664f83b2801f1eb76,
// 64ad4a2364f83b2801f1eb78
