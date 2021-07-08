const express=require("express")

const app=express()
const axios=require("axios")
const ejs = require("ejs");
const fetch = require('node-fetch');
const port=process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));
  app.use(express.static("public"));

app.set('view engine','ejs');
const dotenv = require('dotenv');
dotenv.config();
require("./db/conn")
const Users=require("./models/users");
app.get("/",async(req,res)=>{
  
  axios.get("https://api.wazirx.com/api/v2/tickers").then((data) => {
    var count=0;
    Users.count({},function(err,res){

      if(err)
        throw err;
      else{
          if(res<10)
          {
            for (const i of Object.keys(data.data)) {
              if(count<10){
                
                  count++;
                  const user=new Users({
                    name:data.data[i]["name"],
                    last:data.data[i]["last"],
                    buy:data.data[i]["buy"],
                    sell:data.data[i]["sell"],
                    volume:data.data[i]["volume"],
                    base_unit:data.data[i]["base_unit"]
                  })
                  const registered=user.save();
                }         
              }
          }
        }

    })
    
        //res.render("home", {
         // list: doc.bands
       // });
  });
  const doc=await Users.find({});
  res.render("index", {
    list: doc
  });
    

});

  app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})
