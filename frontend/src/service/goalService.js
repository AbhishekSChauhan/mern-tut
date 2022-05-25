import axios from "axios"

const API_URL='http://localhost:5000/api/goals/'

// CREATE new GOAL
const createGOAL=async(goalData,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response=await axios.post(API_URL,goalData,config)
    return response.data
}

// Get GOALS
const getGOAL=async(token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response=await axios.get(API_URL,config)
    return response.data
}

// Delete user Goals
const deleteGOAL=async(id,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response=await axios.delete(API_URL+id,config)
    return response.data
}

const goalService={
    createGOAL,
    getGOAL,
    deleteGOAL
}

export default goalService