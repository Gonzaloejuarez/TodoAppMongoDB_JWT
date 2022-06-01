const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require("./src/database/db");


const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001


app.listen(PORT, () => {
    console.log(`Se esta escuchando sobre el puerto ${PORT}`);
    db()
})


module.exports = app