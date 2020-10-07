
const fs = require('fs');

const PATH = './data.json';

class Post {
    get() {
        return this.readData();
    }

    getIndividualBlog() {}

    add() {}

    readData(){
        const rawData = fs.readFileSync(PATH);
        const data = JSON.parse(rawData);
        return data;
    }
}

module.exports = Post