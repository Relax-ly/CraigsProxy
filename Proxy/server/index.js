const express = require('express');
const path = require ('path');
const app = express();
const port = 5555;
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, '../')))

app.get('http://localhost:1028/houses', (req, res) => {})

app.listen(port, () => console.log(`All Components Listening ${port}`))