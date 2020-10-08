const express = require("express");
const app = express();

const Post = require("./api/models/posts");
const postData = new Post();

app.get("/", (req, res) => {
    res.status(200).send(postData.get());
});

app.get("/post/:post_id", (req, res) => {
    const postId = req.params.post_id;
    const foundPost = postData.getIndividualBlog(postId)
    if (foundPost){
        res.status(200).send(foundPost);
    } else res.status(404).send('Not found')
});

app.listen(3000, () => console.log("Nasłuchuję localhost:3000"));
