const express=require('express')
const router=express.Router()
const {registerUser,loginUser,personalInfo,getAllUsers}=require('../controller/userController')

const {protect}=require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect, personalInfo)
router.get('/allUsers',getAllUsers)

module.exports=router