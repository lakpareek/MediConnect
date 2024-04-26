const express = require('express');
const cors = require('cors');
const imgur = require('imgur');
const fileUpload = require('express-fileupload');
const app = express();
const bodyParser = require("body-parser");

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(fileUpload());

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get("/api", (req, res) => {
    res.send(req);
  });


app.listen(8080, () => {
    console.log('server listening on port 8080');
});