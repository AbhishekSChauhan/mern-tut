const express=require('express')
const router=express.Router()
const {getGoals,postGoals,updateGoals,deleteGoals}=require('../controller/goalController')
const {protect}=require('../middleware/authMiddleware')

router.route('/').get(protect,getGoals).post(protect,postGoals)
router.route('/:id').put(protect,updateGoals).delete(protect,deleteGoals)

// router.get('/',getGoals)

// router.post('/',postGoals)

// router.put('/:id',updateGoals)

// router.delete('/:id',deleteGoals)


module.exports=router