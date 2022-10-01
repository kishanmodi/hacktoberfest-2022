const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("successfully connected to the database");    
}).catch(err => {
    console.log('could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "app is working."});
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});