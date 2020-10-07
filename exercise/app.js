

const express = require("express");
const app = express();

const Post = require("./api/models/posts");
const postData = new Post();

const data = require('./data.json');

app.get("/", (req, res) => {
    res.status(200).send(postData.get());
});

app.listen(3000, () => console.log("Nasłuchuję localhost:3000"));
