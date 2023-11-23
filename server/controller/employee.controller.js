const { EmployeeModel } = require("../model/employee.model")




const handleEmployeeCreate = async (req, res) => {

    const data = req.body
    try {
        const employee = new EmployeeModel(data)
        await employee.save()
        res.status(200).json({ msg: "new employee has been created" })
    } catch (error) {
        console.log(error)
    }
}

const handleEmployeeGet = async(req,res) => {
      try {
       const employee = await EmployeeModel.find() 
       res.status(200).send(employee)
      } catch (error) {
       console.log(error); 
      }
}

const handledropdownData = async(req,res) => {
  try {
    const employee = await EmployeeModel.find({_id:req.params.id});
    if (employee) {
      console.log(employee)
      res.json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


const handleEmployeeUpdate = async(req,res) => {
 const userIdinUserDoc = req.body.UserId

 const {employeeId} = req.params
 try {
    const employee = await EmployeeModel.findOne({_id:employeeId})
    // console.log("client",client)
  const userIdinemployeeDoc = employee.UserId

  if(userIdinUserDoc === userIdinemployeeDoc){
    await EmployeeModel.findByIdAndUpdate({_id:employeeId},req.body)
    res.status(200).json({msg:"User has been updated success!!!"})
  }else{
    
      res.status(200).json({msg:"You are Not Authorized"})
  }
 } catch (error) {
   console.log(error) 
 }

}

const handleEmployeeDelete = async(req,res) => {
  const userIdinUserDoc = req.body.UserId;
  const {employeeId} = req.params

   try {
    const employee = await EmployeeModel.findOne({_id:employeeId})
    const userIDinEmployeeDoc = employee.UserId
    if(userIdinUserDoc === userIDinEmployeeDoc ){
        await EmployeeModel.findByIdAndDelete({_id:employeeId}, req.body)
        res.status(200).json({msg:"User has been deleted successfully!!!"})
    }else{
    
        res.status(200).json({msg:"You are Not Authorized"})
    }
   } catch (error) {
     console.log(error) 
   }
}



module.exports = {
    handleEmployeeCreate,handleEmployeeGet,handleEmployeeUpdate,handleEmployeeDelete,handledropdownData
}