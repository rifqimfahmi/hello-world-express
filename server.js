const express = require("express");
const app = express()
const port = 3000;

app.get("/", (req,res) => {
    console.log(req.headers)
    console.log("log after header")
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`Server is listening port ${port}`)
})