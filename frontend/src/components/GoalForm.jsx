import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { GoalContext } from '../Context/Goal/GoalContext'

const GoalForm = () => {
    const [text, setText] = useState('')
    const {createGoal}=useContext(GoalContext)

    const onSubmit=(e)=>{
        e.preventDefault()
        const goalData={text}
        createGoal(goalData)
        setText('')
    }


    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Goal</label>
                    <input type='text'
                        name='text' id='text'
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <button className='btn btn-block'type='submit' >
                        Add Goal
                    </button>
                </div>
            </form>
        </section>
    )
}

export default GoalForm