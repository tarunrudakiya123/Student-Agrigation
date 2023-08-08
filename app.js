const express = require('express');
const studentRouter = require('./Student/StudentRouter');
const ConnectDb = require('./Connection');
const SubjectRouter = require('./Subject/SubjectRouter');
const MarksRouter = require('./Marks/MarkRouter');



const app = express();

app.use(express.json())
ConnectDb()

app.use("/student",studentRouter)
app.use("/subject", SubjectRouter)
app.use("/marks", MarksRouter)

app.listen(5000, () => {
  console.log(`Server Started`);
});
