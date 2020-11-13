const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const postData = new Post();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})

app.use('/uploads', express.static('uploads'));

// get all posts
app.get("/api/posts", (req, res) => {
    res.status(200).send(postData.get());
});

// get individual post
app.get("/api/posts/:post_id", (req, res) => {
    const postId = req.params.post_id;
    const foundPost = postData.getIndividualBlog(postId);
    if (foundPost) {
        res.status(200).send(foundPost);
    } else res.status(404).send('Not found');
});

app.post("/api/posts", upload.single('post_image'), (req, res) => {
    const newPost = {
        "id": `${Date.now()}`,
        "title": req.body.title,
        "content": req.body.content,
        "post_image": req.file,
        "added_date": `${Date.now()}`
    }
    console.log(req.body);
    res.status(201).send(newPost);
})

app.listen(3000, () => console.log("Nasłuchuję localhost:3000"));