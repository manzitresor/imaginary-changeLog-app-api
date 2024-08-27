import express from "express"
const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.json(JSON.stringify({text: "Hello Express"}))
})

export default app;