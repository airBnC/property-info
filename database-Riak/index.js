var config = require('./config.js')
var assert = require('assert');
var Riak = require('basho-riak-client');

var async = require('async');
var generateGeneralInfo= require('./CSVGenerator.js')
var logger = require('winston');

var client = config.createClient(function(e, c) {
  if (e) {
    throw e;
  } else {
    console.log('connected to Riak with:', c);
  }
})
client.ping(function(e, result) {
  if (e) {
    console.log(e);
  } else {
    console.log('pong', result);
    // read_listings('7000000')
  }
})

var totalStored = 0; 
function generateBulkData() {
  if(totalStored <= 5) {
    var batch = [];
    for(var i = 1; i <=1; i++) {
      batch.push(generateGeneralInfo(i + totalStored))
    }
    add_listings(batch)
  }
}

    function add_listings(batch) {
          var storeFuncs = [];
          batch.forEach(function(listing) {
              storeFuncs.push(function(async_cb) {
              client.storeValue({
                  bucket:'listings', 
                  key: listing.id.toString(),
                  value: listing
                }, 
                function(err, results) {
                  async_cb(err, results)
                }
              );
            })
          })
          async.parallel(storeFuncs, function(err, results) {
            if (err) {
              throw new Error(err);
            } else {
              console.log('listings stored in Riak', totalStored);
              logger.info('listings stored in Riak')
              totalStored += 1;
            generateBulkData();   
            }
          })
        }

  generateBulkData();
  
 function read_listings(id) {
   client.fetchValue({bucket:'listings', key: `${id}`, convertToJs:true }, 
   function (error, results) {
     if(error) {
       throw new Error(error)
     } else {
       console.log(results)
       var riakObj = results.values.shift();
       var currentListing = riakObj.value;
       console.log('this is my data:', currentListing)
       logger.info('I found %s in "listings",id 1');
     }
   }
  )
 }

//  function delete_listings(client,id) {
//   client.deleteValue({ bucket: 'listings', key:`${id}`}, function (err, rslt) {
//       if (err) {
//           throw new Error(err);
//       } else {
//         console.log(id)
//         counter++
//           logger.info('deletd bucket!', id);
//           console.log('counter', counter)
//       }
//       client.stop(function (err) {
//           if (err) {
//               logger.error('error:', err);
//           }
//           done(err, rslt);
//       });
//   });
// }

// module.exports = {
//   read_listings
// }


