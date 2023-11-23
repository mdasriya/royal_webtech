import React, { useEffect, useState } from 'react'
import { Box, Center, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Dashboard = () => {
    const navigate = useNavigate()


  return (
    <div>
      <Box bg='white'  w='100%' p={20} color='white'>
 <Center>
 <Stack spacing={4} direction='row' align='center'>
 <Button colorScheme='teal' size='sm' onClick={()=> navigate("/addemp")}>
    ADD EMPLOYEE
  </Button>
  <Button colorScheme='teal' size='sm' onClick={()=> navigate("/employee")}>
    VIEW EMPLOYEE
  </Button>
  <Button colorScheme='teal' size='sm' onClick={()=> navigate("/view")}>
    VIEW DETAIL TASK
  </Button>
 
</Stack>
 </Center>
</Box>
    </div>
  )
}

export default Dashboard
