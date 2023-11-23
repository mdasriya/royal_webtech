const express = require("express")
 const cors = require("cors")
const { connection } = require("./config/db")
const { UserRouter } = require("./routes/user.router")
const { EmployeeRouter } = require("./routes/employee.router")
 require("dotenv").config()

const port = process.env.PORT || 8000

 const app = express()
 app.use(express.json())
 app.use(cors())

 app.use("/user", UserRouter)
 app.use("/employee", EmployeeRouter)

 app.get("/", (req,res)=> {
    res.send("welcome to my Royal WebTech server")
 })


 app.listen(port, async(req,res)=> {
  try {
    await connection
    console.log("database is connected")
    console.log(`server is runnig at http://localhost:${port}`)
  } catch (error) {
console.log(error)
  }
 })