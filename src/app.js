const connection = require('./db/connection');
const yargs = require("yargs");
const {addMovie, 
    readMovie,
    updateMovie,
    deleteMovie,
    searchByName,
    searchByActor} = require('./utils/index')

function app() {
    try{
        if (process.argv[2]=== 'add') {
                connection(addMovie, 
                    {title: yargs.argv.title, actor:yargs.argv.actor})
        }else if(process.argv[2] === "read"){
            connection(readMovie)

        }else if(process.argv[2] === "update"){
            connection(updateMovie, 
                {title: yargs.argv.title, actor:yargs.argv.actor} )

        }else if (process.argv[2] === "delete"){
            connection(deleteMovie, 
                {title: yargs.argv.title})
        
        }else if (process.argv[2] === "find"){
            connection(searchByName, 
                {title: yargs.argv.title})
        }else if (process.argv[2] === "find2"){
            connection(searchByActor, 
                {actor: yargs.argv.actor})
        }else{
            console.log('Command is incorrect')
        }
    }catch(error){
        console.log(error)
    }
}

app();