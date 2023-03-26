const express = require("express");
const app = express()
const port = process.env.PORT;

app.get("/", (req,res) => {
    console.log(req.headers)
    console.log(`Hello port ${port}`)
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`Server is listening port ${port}`)
})