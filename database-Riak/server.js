const express = require('express');
const path = require('path');
const cors = require('cors');
// const db = require('./index.js')
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(/(\/rooms\/100|\/rooms\/[1-9][0-9]|\/rooms\/[1-9])\b/, express.static(path.join(__dirname, '../client/dist/')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));




app.get('/api/rooms/general', (req, res) => {
  // const { id } = req.params;
  console.log('received info')

  res.send();
});

app.listen(3002, () => console.log(3002));


module.exports = app;
