const goalReducer=(state,action)=>{
    const {type,payload}=action

    if(type==='CREATE_GOAL'){
        // let newGoal=state.goal.
        return {
            ...state,
            goal:state.goal.concat(payload),
            isSuccess:true,
            isLoading:false,
            isError:false
        }
    }

    if(type==='GET_GOAL'){
        return {
            ...state,
            goal:payload,
            isSuccess:true,
            isLoading:false,
            isError:false
        }
    }

    if(type==='DELETE_GOAL'){
        // let filteredGoal=state.goal.filter(e=>e.id)
        return {
            ...state,
            goal:state.goal.filter(e=>e._id!==payload),
            isSuccess:true,
            isLoading:false,
            isError:false
        }
    }

    if(type==='LOADING'){
        return{
            ...state,
            isLoading:true
        }
    }

    return state
}

export default goalReducer