const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    char: {
        type: String,
        default: "Not specified"
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        default: 5,
    }
});
const Anime = mongoose.model("Anime", animeSchema);

module.exports = Anime;