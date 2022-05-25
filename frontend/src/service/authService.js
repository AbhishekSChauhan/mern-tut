import axios from "axios";

const API_URL='http://localhost:5000/api/users/'

// Register user
const register = async(userData)=>{
    console.log('userData',userData)
    const response=await axios.post(API_URL,userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login=async(userData)=>{
    console.log('login userData',userData)
    const res=await axios.post(API_URL+'login',userData)
    if(res.data){
        localStorage.setItem('user',JSON.stringify(res.data))
    }
    return res.data
}

// Logout user
const logout=async()=>{
    localStorage.removeItem('user')
}

const authService={
    register,logout,login
}

export default authService