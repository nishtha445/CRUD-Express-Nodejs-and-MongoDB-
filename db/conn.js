const mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('Connection successful')
}).catch((e)=>{
    console.log('No Connection')

})