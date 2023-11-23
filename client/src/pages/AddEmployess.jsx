import { Box, Input, Text,Button, Center } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddEmployess = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastame] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
const navigate = useNavigate()


const handleAdd = () => {
   if(firstname && lastname && email && number){
    const data = { firstname, lastname,email,number }
   
    axios.post("http://localhost:8000/employee/create", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        console.log(res.data.msg);
        alert(res.data.msg)
      })
   setFirstname("")
   setLastame("")
   setemail("")
   setnumber("")
  navigate("/employee")
   }else{
    alert("input is required")
   }
  

}
  return (
    <Box style={{width:"30%",  margin:"auto", padding:"30px", marginTop:"40px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
     <Box width={"100%"}>
      <Center>
        <Text as='b' fontSize='2xl'>

      Create Employee
        </Text>

      </Center>

     </Box>
    <Box mt={"20px"}>

      <label mb='4px'>First Name</label><span style={{color:"red"}}>*</span>
      <Input mb={"10px"}
        value={firstname}
        onChange={(e)=> setFirstname(e.target.value)}
        
        size='sm'
      />
      <label mb='4px'>last Name</label><span style={{color:"red"}}>*</span>
      <Input  mb={"10px"}
        value={lastname}
        onChange={(e)=> setLastame(e.target.value)}
        
        size='sm'
      />
      <label mb='4px'>Email Id</label><span style={{color:"red"}}>*</span>
      <Input  mb={"10px"}
        value={email}
        onChange={(e)=> setemail(e.target.value)}
    
        size='sm'
      />
      <label mb='4px'>Number</label><span style={{color:"red"}}>*</span>
      <Input  mb={"10px"}
        value={number}
        onChange={(e)=> setnumber(e.target.value)}
        
        size='sm'
      />
      <Center>
 <Button colorScheme='teal' variant='solid' mt={"20px"} p={"0px 40px"} onClick={handleAdd}>
   ADD EMPLOYEE
  </Button>
  </Center>
    </Box>
  
    </Box>
  )
}

export default AddEmployess
