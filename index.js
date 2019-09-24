const express = require('express');
const bodyParser = require('body-parser');
const nocache = require('nocache');

const app = express();

const PORT = 3002;

// Applying middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(nocache());

const CLIENT_ID = "154785502512-ar7ghl73i4teiu2lvfdk0ek37l2hblu0.apps.googleusercontent.com";
const CLIENT_SECRET = "O8lork5YYHknoeSVBczQWpfq";
const API_KEY = "AIzaSyBMBmIwsQ8rrJcgif7jk_Tb1EP6iW0itjg";

// Server Startup
app.listen(PORT, () => {
    console.log(`OAuth 2.0 Application running on ${PORT}`);
});

// Login Page Load
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});
