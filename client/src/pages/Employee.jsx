import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./employee.css"
import { Box, Circle, Flex, Select, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
const Employee = () => {
  const [data, setData] = useState([])
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeeData, setEmployeeData] = useState([]);



  const handleEmployeeChange = async (event) => {
    const selectedId = event.target.value;
    console.log(selectedId)
    setSelectedEmployee(selectedId);


    await axios.get(`http://localhost:8000/employee/${selectedId}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
  };



  useEffect(() => {
    axios.get("http://localhost:8000/employee", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => {
        setData(res.data)
        setEmployeeData(res.data)
      })
  }, [])
  return (
    <>
      <Box width={"100%"} display={"flex"} justifyContent={"flex-end"} mt={"10px"} >
        <Box width={"15%"} mt={"10px"} pr={"10px"}>
          <Select placeholder='Select employee' value="" onChange={handleEmployeeChange}>
            {
              employeeData && employeeData.map((item, index) => <option key={index} value={item._id} >{item.firstname} {item.lastname}</option>)
            }
            <option key={"mukesh"} value={""} >All Employee</option>
          </Select>
        </Box>

      </Box>
      {
        data.length <= 0 ? <h1 style={{ position: "absolute", left: "45%", fontSize: "30px", fontWeight: "600" }}>No Client Data ...</h1> : <div style={{ padding: "0px 20px" }}>
          <Flex>
            <Text as={"b"}>Total Client</Text>
            <Circle size='20px' ml={"3px"} bg='tomato' color='white'>
              <span className='total'>{data.length}</span>
            </Circle>
          </Flex>

          <TableContainer>
            <Table variant='striped' colorScheme="gray">
              <Thead>
                <Tr>
                  <Th>Sr No.</Th>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Email</Th>
                  <Th> Mobile Number</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  data && data.map((item, index) => {
                    return (
                      <Tr key={index}>
                        <Td>{index + 1}</Td>
                        <Td>{item.firstname}</Td>
                        <Td>{item.lastname}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.number}</Td>
                      </Tr>
                    )
                  })
                }
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      }

    </>
  )
}

export default Employee
