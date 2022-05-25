import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import goalService from "../../service/goalService";
import goalReducer from "./goalReducer";

const GoalContext=createContext()

const initialState={
    goal:[],
    isLoading:false,
    isError:false,
    isSuccess:false
}
const GoalProvider=({props,children})=>{
    const navigate=useNavigate()
    const [state,dispatch]=useReducer(goalReducer,initialState)

    const user=JSON.parse(localStorage.getItem('user'))
    const token=user ? user.token : null

    useEffect(()=>{
        if(!token){
            navigate('/login')            
        }else{
            getGoal()
        }        
    },[])

    // create goals

    const createGoal=async(data)=>{
        try{
            dispatch({type:'LOADING'})
            // const token=JSON.parse(localStorage.getItem('user')).token
            // console.log(token)
            const res=await goalService.createGOAL(data,token)
            dispatch({type:'CREATE_GOAL',payload:res})
        }catch(error){
            const message=(error.response && error.response.data && 
                error.response.data.message) || error.message || error.toString()
            toast.error(message)
            console.log('Err in goal provider',error)
        }
    }

    // Get user goals
    const getGoal=async()=>{
        try{
            dispatch({type:'LOADING'})
            // const token=JSON.parse(localStorage.getItem('user')).token
            // console.log(token)
            const res=await goalService.getGOAL(token)
            dispatch({type:'GET_GOAL',payload:res})
        }catch(error){
            const message=(error.response && error.response.data && 
                error.response.data.message) || error.message || error.toString()
            toast.error(message)
            console.log('Err in goal provider',error)
        }
    }

    // remove/delete goal
    const deleteGoal=async(id)=>{
        try{
            dispatch({type:'LOADING'})
            // const token=JSON.parse(localStorage.getItem('user')).token
            // console.log(token)
            const res=await goalService.deleteGOAL(id,token)
            dispatch({type:'DELETE_GOAL',payload:id})
        }catch(error){
            const message=(error.response && error.response.data && 
                error.response.data.message) || error.message || error.toString()
            toast.error(message)
            console.log('Err in auth provider',error)
        }
    }

    if(state.isLoading){
        return <Spinner />
    }


    return (
        <GoalContext.Provider value={{...state,createGoal,getGoal,deleteGoal}}>
            {children}
        </GoalContext.Provider>
    )
}

export {GoalContext,GoalProvider}