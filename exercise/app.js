const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hellooo world");
});

app.listen(3000, () => console.log("Nasłuchuję localhost:3000"));