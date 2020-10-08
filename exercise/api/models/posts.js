const fs = require("fs");

const PATH = "./data.json";

class Post {
    get() {
        return this.readData();
    }

    getIndividualBlog(postId) {
        const posts = this.readData()
        const foundPost = posts.find(({id}) => id == postId)
        return foundPost
    }

    add(newPost) {
        const data = this.readData()
        data.unshift(newPost)
        this.storeData(data)
    }

    readData() {
        const rawData = fs.readFileSync(PATH);
        const data = JSON.parse(rawData);
        return data;
    }

    storeData(rawData) {
        const data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;
