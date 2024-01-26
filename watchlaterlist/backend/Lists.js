const mongoose = require('mongoose');

const watchlistSchema = mongoose.Schema({
        movietitle: {
            type: String,
            require: true,
        },
        moviesource: {
            type: String,
            require: true,
        },

        moviegenre: {
            type: String,
            require: true,
        },

        movielink: {
            type: String,
            require: true,
        },

        moviewarning: {
            type: String,
            require: true,
        },

        moviedescription: {
            type: String,
            require: true,
        }
    },
    { timestamps: true },

);

const WatchListModal = mongoose.model("watchlist", watchlistSchema);
module.exports = WatchListModal;