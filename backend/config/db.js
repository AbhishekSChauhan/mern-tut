const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected established at:${connect.connection.host}`)
    }catch(err){
        console.log(err.message)
        process.exit(1)
    }
}

module.exports=connectDB