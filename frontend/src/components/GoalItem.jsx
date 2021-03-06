import React from 'react'
import { useContext } from 'react'
import { GoalContext } from '../Context/Goal/GoalContext'

const GoalItem = ({goal}) => {
    const {deleteGoal}=useContext(GoalContext)
    return (
        <div className='goal'>
            <div>
                {new Date(goal.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{goal.text}</h2>
            <button 
            onClick={()=>deleteGoal(goal._id)}
            className='close'>X</button>
        </div>
    )
}

export default GoalItem