const express = require('express');

const app = express();
app.get('/db', (req, res) => {
    const data = [{ title: "Database", content: "content whatever" }]
    res.send(data);
})
app.listen(4000, () => {
    console.log("database connector running on port 4000")
})


// const databaseFunction = () => {
//     const config = {}
//     const data = [{ title: "Database", content: "content whatever" }]
//     if (config.hasData) {
//         return data
//     } else {
//         process.exit(1)
//     }
// }
// module.exports = {
//     databaseFunction

// }