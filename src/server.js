const express = require('express');
const app = express();
const db = 'postgresql://api_course_v4_keuc_user:wn4Sa4dRrb5LJjfOU8nBq2Ialuwo1lLd@dpg-cr6mpnt6l47c7396b5ng-a.oregon-postgres.render.com/api_course_v4_keuc'

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.json(JSON.stringify({text: "Hello Express"}))
})

module.exports = app;