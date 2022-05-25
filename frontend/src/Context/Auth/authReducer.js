const authReducer=(state,action)=>{
    const {type,payload}=action

    if(type==='REGISTER'){
        return {
            ...state,
            user:payload,
            isError:false,
            isSuccess:true,
            isLoading:false
        }
    }

    if(type==='LOGIN'){
        return {
            ...state,
            user:payload,
            isError:false,
            isSuccess:true,
            isLoading:false
        }
    }

    if(type==='LOGOUT'){
        return {
            ...state,
            user:null,
            isError:false,
            isSuccess:false,
            isLoading:false
        }
    }

    if(type==='LOADING'){
        return {
            ...state,isLoading:true
        }
    }

    

    return state
}

export default authReducer