import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { GoalContext } from '../Context/Goal/GoalContext'
import GoalItem from './GoalItem'
import Spinner from './Spinner'

const DisplayGoals = () => {
    const {goal}=useContext(GoalContext)

    return (
        <section className='content'>
            {goal.length>0 ? (
                <div className='goals'>
                    {goal.map((g)=>(
                        <GoalItem key={g._id} goal={g} />
                    ))}
                </div>
            ):(
            <h3>You have not set any goals</h3>
            )}
        </section>
    )
}

export default DisplayGoals