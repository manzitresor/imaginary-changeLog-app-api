import express from "express"
import router from "./router";
import  morgan from "morgan";
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.statusCode = 200;
    res.json(JSON.stringify({text: "Hello Express"}))
})

app.use('/api',router);

export default app;