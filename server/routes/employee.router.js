const express = require("express")

const { auth } = require("../middleware/auth")
const { handleEmployeeCreate, handleEmployeeGet, handleEmployeeUpdate, handleEmployeeDelete, handledropdownData } = require("../controller/employee.controller")

 const EmployeeRouter = express.Router()
 EmployeeRouter.use(auth)

  EmployeeRouter.post("/create", handleEmployeeCreate)
  EmployeeRouter.get("/", handleEmployeeGet)
  EmployeeRouter.patch("/update/:employeeId", handleEmployeeUpdate)
  EmployeeRouter.delete("/delete/:employeeId", handleEmployeeDelete)
  
  EmployeeRouter.get('/:id', handledropdownData);
module.exports = {
    EmployeeRouter
}
  

