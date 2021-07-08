const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://admin:Nishtha@@123@cluster0.fankp.mongodb.net/Internship_Data?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('Connection successful')
}).catch((e)=>{
    console.log('No Connection')

})