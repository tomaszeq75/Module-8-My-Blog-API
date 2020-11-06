const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const postData = new Post();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})

app.use('/uploads', express.static('uploads'))

// get all posts
app.get("/api/posts", (req, res) => {
    res.status(200).send(postData.get());
});

// get individual post
app.get("/api/posts/:post_id", (req, res) => {
    const postId = req.params.post_id;
    const foundPost = postData.getIndividualBlog(postId)
    if (foundPost){
        res.status(200).send(foundPost);
    } else res.status(404).send('Not found')
});

app.listen(3000, () => console.log("Nasłuchuję localhost:3000"));
