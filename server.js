const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', (req, res) => {
    res.json({"message": "app is working."});
});

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});