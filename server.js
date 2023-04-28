const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
/************ MIDDLEVARES *************/

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/************ DATABASES *************/
require("dotenv").config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@cluster0.zyx1rni.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


/************ RESPONSE *************/
app.get("/:id",(req,res)=>{
  let id=req.params.id
  if(id==1){
    async function runQuery(){
        try{
            const database = client.db("NodeTask");
            const customer = database.collection("Customer_Info");
            const query = {$and: [{"$expr":{"$lte":[{"$toDouble":"$income"},5]}},{"car":"BMW"}]}
          
            const cursor = await customer.find(query).toArray()
            console.log(cursor)
            res.send(cursor)
          }
          catch(err){
              console.log(err)
          }
          finally{
            await client.close()
          
        }
      }
      runQuery();

  }
  else if(id==2){
    async function runQuery(){
      try{
          const database = client.db("NodeTask");
          const customer = database.collection("Customer_Info");
          const query = {$and: [{"gender":{"$ne":"Female"}},{"$expr":{"$lt":[{"$toDouble":"$phone_price"},10000]}}]}
        
          const cursor = await customer.find(query).toArray()
          console.log(cursor)
          res.send(cursor)
        }
        catch(err){
            console.log(err)
        }
        finally{
          await client.close()
        
      }
      }
      runQuery();
  }
  else if(id==3){

  }
  else if(id==4){
      async function runQuery(){
        try{
            const database = client.db("NodeTask");
            const customer = database.collection("Customer_Info");
            const query = {$and: [{$or:[{"car":"BMW"},{"car":"Mercedes"},{"car":"Audi"}]},{"email":{"$regex":/^([^0-9]*)$/}}]}
          
            const cursor = await customer.find(query).toArray()
            console.log(cursor)
          }
          catch(err){
              console.log(err)
          }
          finally{
            await client.close()
          
        }
      }
      runQuery();
  }
  else if(id==5){
    
  }
})

app.post("/",(req,res)=>{
    query=[]
    console.log(req.params.id)
    
    
}) 

// if(req.body.income){
//   query.push({"$expr":{"$lte":[{"$toDouble":"$income"},req.body.income.value]}})
// }
// async function run(){
//     try{
//       const database = client.db("NodeTask");
//       const customer = database.collection("Customer_Info");
//       const query = {$and: [{"$expr":{"$lte":[{"$toDouble":"$income"},5]}},{"car":"BMW"}]}
    
//       const cursor = await customer.find(query).toArray()
//       console.log(cursor)
//     }
//     catch(err){
//         console.log(err)
//     }
//     finally{
//       await client.close()
//     }
// }
app.listen(PORT,()=>console.log("connected"))