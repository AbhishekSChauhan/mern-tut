import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import authService from "../../service/authService";
import authReducer from "./authReducer";

const AuthContext = createContext()

// Get user from localStorage
const user=JSON.parse(localStorage.getItem('user'))

const initialState={
    user:user?user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

const AuthProvider=({children})=>{
    const [state, dispatch] = useReducer(authReducer, initialState)

    // Register user
    const register=async(user)=>{
        try{
            dispatch({type:'LOADING'})
            const res = await authService.register(user)
            console.log(res)
            dispatch({type:'REGISTER',payload:res})
        }catch(error){
            const message=(error.response && error.response.data && 
                error.response.data.message) || error.message || error.toString()
            toast.error(message)
            console.log('Err in auth provider',error)
        }
    }

    // Login user
    const login=async(user)=>{
        try{
            dispatch({type:'LOADING'})
            const res = await authService.login(user)
            console.log(res)
            dispatch({type:'LOGIN',payload:res})
        }catch(error){
            const message=(error.response && error.response.data && 
                error.response.data.message) || error.message || error.toString()
            toast.error(message)
            console.log('Err in auth provider',error)
        }
    }

    // Logout user
    const logout=async()=>{
        try{
            dispatch({type:'LOADING'})
            const res= await authService.logout()
            console.log(res)
            dispatch({type:'LOGOUT'})
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
        <AuthContext.Provider value={{...state,register,logout,login}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider,AuthContext}