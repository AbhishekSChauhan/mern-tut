const Goal=require('../model/goalModel')
const User=require('../model/userModel')
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = async(req,res)=>{
    const goals=await Goal.find({user:req.user.id})

    res.status(200).json(goals)
}

// @desc Post goals
// @route POST /api/goals
// @access Private
const postGoals = async(req,res)=>{
    console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal=await Goal.create({
        text:req.body.text,
        user:req.user.id
    })

    res.status(200).json(goal)
}

// @desc Updare goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = async(req,res)=>{
    const goal=await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    // Check only logged in user matches goal user
    if(goal.user.toString()!==req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedGoal)
}

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = async(req,res)=>{
    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    

    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    // Check only logged in user matches goal user
    if(goal.user.toString()!==req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await goal.remove()
    res.status(200).json({id: req.params.id})
    const deletedGoal=await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedGoal)
}

module.exports={
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals
}