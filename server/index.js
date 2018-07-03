require('newrelic');
const cluster = require('cluster');
const compression = require('compression');
const express = require('express');
const redis = require('redis');
const client = redis.createClient();
const path = require('path');
const cors = require('cors');
const db = require('../database-Postgres/index.js');
const bodyParser = require('body-parser');
const amenities = require('./amenitiesData.js');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use('/rooms/:id/', express.static(path.join(__dirname, '../client/dist')));
app.use(compression())

app.get('/api/rooms/amenities', (req, res) => {
  res.type = 'json';
  res.statusCode = 200;
  res.end(JSON.stringify(amenities));
});


const getCache = (req, res, id) => {
  //Check the cache data from the server redis
  client.get(id, (error, result) => {

    if (result) {
      res.end(JSON.stringify(result))
    } else {
      db.getGeneralInfo(id, function(error, results){
        if(error) {
          console.log(error)
          res.statusCode = 500;
          res.end()
        } else {
          res.statusCode = 200;
          client.setex(id, 3600, JSON.stringify(results));
          res.end( JSON.stringify(results))
        }
      })
    } 
  });
}

app.get('/api/rooms/:id/general',function(req, res){
  const { params } = req;
  console.log(params.id)
  getCache(req, res, params.id)
 
});

app.post('/api/postInfo', (req, res) => {
  data = req.body;
  db.postGeneralInfo(data), function(err, results){
    if(err) {
      res.statusCode = 500;
      res.end()
    } else {
      res.statusCode = 201;
      res.end();
    }
  }
})

app.patch('/updateInfo/:id/general', (req, res) => {
  data = req.body;
  db.updateGeneralInfo(data), function(err, results){
    if(err) {
      res.statusCode = 500;
      res.end()
    } else {
      res.statusCode = 201;
      res.end();
    }
  }
})

app.delete('/deleteInfo/:id/general', (req, res) => {
  data = req.body;
  db.deleteGeneralInfo(data), function(err, results){
    if(err) {
      res.statusCode = 500;
      res.end()
    } else {
      res.statusCode = 201;
      res.end();
    }
  }
})

app.listen(3003, () => console.log(3003));

module.exports = app;
