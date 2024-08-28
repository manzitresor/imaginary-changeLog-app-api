import express from "express"
import router from "./router";
const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.json(JSON.stringify({text: "Hello Express"}))
})

app.use('/api',router);

export default app;