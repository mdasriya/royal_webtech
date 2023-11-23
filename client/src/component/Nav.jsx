import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Text } from '@chakra-ui/react';
import "./Nav.css"
const Nav = () => {
  const [auth, setAuth] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    setAuth(false)
    alert("User Logout Success!!!")
    navigate("/login")
  }


  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) {
      setAuth(true)
    }

  }, [handleLogout, auth])


  return (
    <div>
      <div className='container' >
        <Text fontSize='3xl' cursor={"pointer"} onClick={() => navigate("/")}>Royal WebTech Pvt Ltd</Text>
        <div style={{ display: "flex", gap: 5 }}>
          {/* <div>
            <Button colorScheme='teal' variant='outline' onClick={() => navigate("/addclient")}>AddClient</Button>
          </div> */}
          {
            auth ? <Button colorScheme='teal' variant='outline' onClick={handleLogout}>
              Logout
            </Button> : <Button colorScheme='teal' variant='outline' onClick={() => navigate("/login")}>
              Login
            </Button>
          }


          <div>
            <Button colorScheme='teal' variant='outline' onClick={() => navigate("/signup")}>SignUp</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Nav
