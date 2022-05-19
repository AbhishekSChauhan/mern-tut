// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = async(req,res)=>{
    res.status(200).json({message:'Get GOALS from backend'})
}

// @desc Post goals
// @route POST /api/goals
// @access Private
const postGoals = async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'Set GOALS from backend'})
}

// @desc Updare goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = async(req,res)=>{
    res.status(200).json({message:`update single GOAL ${req.params.id} from backend`})
}

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = async(req,res)=>{
    res.status(200).json({message:`delete single GOAL ${req.params.id} from backend`})
}

module.exports={
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals
}