const Anime = require("./anime.model");
const mongoose = require("mongoose");

exports.addAnime = async (animeObj) => {
    try {
        const newAnime = new Anime(animeObj);
        await newAnime.save();
        mongoose.disconnect();
    }catch(error){
        console.log(error);
    };
}

exports.deleteAnime = async (deleteObj) =>{
    try{
        await Anime.findOneAndRemove(deleteObj);
        mongoose.disconnect();
    }catch(error){
        console.log(error);
    };
}

exports.findAnime = async (findObj) =>{
    try{
        const finder = await Anime.findOne(findObj);
        mongoose.disconnect();
        return finder;
    }catch(error){
        console.log(error);
    }
}

exports.updateAnime = async (animeObj,updateObj) => {
    try{
        const updater = await Anime.findOneAndUpdate(animeObj,updateObj);
        mongoose.disconnect();
    }catch(error){
        console.log(error);
    };
}