const express = require("express");
const Redis = require('ioredis')
const app = express()
const port = process.env.PORT;

const client = new Redis({ host: 'redis', port: 6379 });

client.on('error', (err) => {
    console.error(err);
});

app.get("/", (req,res) => {
    console.log(req.headers)
    console.log(`Hello port ${port}`)
    res.send("hello world")
})

app.get("/long-ops", (req, res) => {
    client.get("long-ops", async (err, data) => {
        if (err) throw err
        if (data != null) {
            console.log('data is not null')
            return res.json({data: JSON.parse(data)})
        }
        const fetchedData = await fetchLongOpsData()
        client.setex('long-ops', 10, JSON.stringify(fetchedData))
        return res.json({data: fetchedData})
    })
})

app.get("/always-wait", async (req, res) => {
    return res.send(await fetchLongOpsData())
})

function fetchLongOpsData() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('ops finished')
            resolve("{thy-name: 'Rifqi'}")
        }, 3000)
    })
}

app.listen(port, () => {
    console.log(`Server is listening port ${port}`)
})