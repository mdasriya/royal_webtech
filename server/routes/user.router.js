
const express = require("express")
const { handleUserRegister, handleUserLogin } = require("../controller/user.controller")
  
  const UserRouter = express.Router()

  UserRouter.post("/register", handleUserRegister)
  UserRouter.post("/login", handleUserLogin)

  module.exports = {
    UserRouter
  }