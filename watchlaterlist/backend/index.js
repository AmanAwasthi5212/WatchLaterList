const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const WatchListModal = require('./Lists');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vinay:vinay12345@watchlist.ca3f7we.mongodb.net/?retryWrites=true&w=majority");

app.listen(3001, () => {
    console.log("server is running");
})

app.post("/AddToList", (req, res) => {
    WatchListModal.create(req.body)
        .then(lists => res.json(lists))
        .catch(err => res.json(err))
});

app.get("/", (req, res) => {
    WatchListModal.find({})
        .then(lists => res.json(lists))
        .catch(err => res.json(err))
})

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    WatchListModal.findById({_id:id})
        .then(lists => res.json(lists))
        .catch(err => res.json(err))
})

app.put("/UpdateToList/:id", (req, res) => {
    const id = req.params.id;
    WatchListModal.findByIdAndUpdate({_id:id}, req.body, { new: true })
    .then(lists => res.json(lists))
    .catch(err => res.json(err));
})

app.delete("/deletelist/:id", (req, res) => {
    const id = req.params.id;
    WatchListModal.findByIdAndDelete({_id:id})
    .then(lists => res.json(lists))
    .catch(err => res.json(err));
})