const { MongoClient} = require('mongodb');

require("dotenv").config();

const connection = async (crudFunc, dataObj) =>{
    try{
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        console.log("Successefully connected");
        const db = client.db("movies");
        const collection = db.collection("moviesCollection");

        await crudFunc(collection, dataObj);

        client.close()
        console.log("Client closed")
    }catch (error){
        console.log(error)
}
}



module.exports = connection