const { Pool } = require('pg')

const pool = new Pool({
  host: '127.0.0.1',
  user: 'humanity',
  database:'general-info'
})

pool.on('error',(err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

const getGeneralInfo = (id, cb) => {
  pool.connect()
 .then(client => {
   return client.query(`SELECT title,location,home_type,short_description,more_description,highlights,owner,property_features FROM general WHERE id = ${id}`)
   .then(res => {
     client.release()
     cb(null, res.rows[0])
   })
   .catch(e => {
    client.release()
    cb(e, null)
    console.log(e.stack)
   })
 })
}

const postGeneralInfo = (data, cb) => 
  pool.connect((err, client, release) => {
    if(err){
      return console.error("Error aquiring client", err.stack)
    }
    console.log(data)
    client.query('INSERT INTO general (title,location,home_type,short_description,more_description,highlights,owner,property_features) VALUES (?) returning id',[data]), (err, results) => {
      release()
      if(err) {
        return console.error('Error executing query', err.stack)
        cb(err, null)
      }
      cb(null, result.rows)
      console.log(result.rows)
  }
})
 
const updateGeneralInfo = (data, cb) => 
  pool.connect((err, client, release) => {
    if(err){
      return console.error("Error aquiring client", err.stack)
    }
    client.query('UPDATE general SET (?) = (?) WHERE id = (?)'), (err, results) => {
      release()
      if(err) {
        return console.error('Error executing query', err.stack)
        cb(err, null)
      }
      console.log(result.rows)
      cb(null, results.rows)
  }
})


const deleteGeneralInfo = (data, cb) => {
  pool.connect((err, client, release) => {
    if(err){
      return console.error("Error aquiring client", err.stack)
    }
    client.query('DELETE * FROM general where id = (?)'), (err, results) => {
      release()
      if(err) {
        return console.error('Error executing query', err.stack)
        cb(err, null)
      }
      console.log(result.rows)
      cb(null,results.row)
    }
  })
}

module.exports.getGeneralInfo = getGeneralInfo;
module.exports.postGeneralInfo = postGeneralInfo;
module.exports.updateGeneralInfo = updateGeneralInfo;
module.exports.deleteGeneralInfo = deleteGeneralInfo;

//Insertion example: 
// VALUES ('Tasty Small Home','Carsonmouth' ,'Tasty House','Saepe vitae aliquam qui ut quis magnam.','{"The space","Error quae omnis optio ratione cum eos quia et. Reprehenderit omnis quas dolor. Porro voluptatem aliquid laudantium eum vitae odio consequuntur. Quibusdam eius pariatur.","Interaction with guests","Minus quis explicabo veritatis.","Other things to note","Aspernatur omnis voluptatum voluptatem."}','{"Sparkling clean","Fuga sunt tempora aut dolor nihil aut quam architecto provident.",Breakfast,"Voluptas laborum odio quis ut saepe voluptatem qui et.","Great check-in experience","Aut quidem non."}','{"Paris","https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg"}','{"1","2","3","1"}')
 
