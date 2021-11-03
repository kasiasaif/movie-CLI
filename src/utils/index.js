async function addMovie (collection, dataObj) {
    try{
        await collection.insertOne(dataObj);
        console.log('Seccesfully added Movie')
    }catch(error){
        console.log(error)
    }
}

async function readMovie(collection){
    try{
        const result= await collection.find({}).toArray();
        console.log(result)
    }catch(error){
        console.log(error)
    }
}

async function updateMovie(collection, dataObj){
    try{
        const result = await collection.updateOne(
            {title: dataObj.title }, {$set:{actor: dataObj.actor}})
        console.log(`Successfully updated `, result)
    }catch (error){
        console.log(error)
    }
}

async function deleteMovie( collection, dataObj){
    try{
        const result = await collection.deleteOne({title: dataObj.title })
        console.log(`${result} has been deleted`)
    }catch (error){
        console.log(error)
    }
}
async function searchByName (collection,dataObj){
    try{
        const result= await collection.find({title: dataObj.title})
        console.log(result)

    }catch(error){
        console.log(error)
    }
}

async function searchByActor(collection,dataObj){
    try{
        const result= await collection.find({actor: dataObj.actor})
        console.log(result)

    }catch(error){
        console.log(error)
    }
}










module.exports ={
    addMovie, 
    readMovie,
    updateMovie,
    deleteMovie,
    searchByName,
    searchByActor,
} 