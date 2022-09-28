const express = require('express');
//const mongoose = require('mongoose');
const app = express();
//const bodyParser =require('body-parser');
//const cors = require('cors');
const port = process.env.PORT || 8080;

app.use('/', require('./routes'))

app.listen(port, () => {
   console.log(`Example app listening on ${port}`)
})
       