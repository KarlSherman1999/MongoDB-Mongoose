require("./db/connection");
const mongoose  = require("mongoose");
const yargs = require("yargs");
const {addAnime, deleteAnime, findAnime, updateAnime} = require("./anime/anime.functions");

const app = async (args) => {
    try{
        if (args.add){
            const animeObj = {title: args.title,
                char: args.char,
                rating: args.rating
            };
            await addAnime(animeObj)
            console.log(`Successfully added ${animeObj.title}`)
        }
        else if (args.delete){
            const deleteObj = {title: args.title};
            await deleteAnime(deleteObj)
            console.log(`Successfully deleted ${deleteObj.title}`)
        }
        else if (args.find){
            const findObj = {title: args.title};
            const test = await findAnime(findObj);
            console.log(`Found document: ${test}`);
            
        }
        else if (args.update){
            const animeObj = {title: args.title};
            const updateObj = {char: args.char,
                rating: args.rating
            };
            await updateAnime(animeObj,updateObj)
            console.log(`${animeObj.title} has been updated`)
        }
        else{
            console.log("Incorrect command")
            mongoose.disconnect()
        }
    }catch(error){
        console.log(error)
        mongoose.disconnect();
    }
}
app(yargs.argv);