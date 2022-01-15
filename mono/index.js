const express = require("express")
const axios = require('axios')
const app = express()
app.use(express.json())
app.get('/', async (req, res) => {
    const result = await axios.get('http://localhost:4000/db')
    res.send(result.data)
})
app.listen(3000, () => {
    console.log('listening')
})