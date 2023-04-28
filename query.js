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
//{"last_name":{"$regex":/^M/}},{"$expr":{"$gt":[{"strLenCP":"quote"},15]}},{"match":{"expr":{"email":{"$regex":"$last_name"}}}}
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