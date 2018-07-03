const faker = require('faker');
const fs = require('fs');
var stream = fs.createWriteStream('data.csv');

  const generateGeneralInfo = () => {
    var csvData = ''
    var title = `${faker.commerce.productAdjective()} ${faker.commerce.productAdjective()} Home`
    var location = faker.address.city()
    var home_type = `${faker.commerce.productAdjective()} HOUSE`
    var short_description = faker.lorem.sentence();
    var more_description = moreDescriptionGenerator();
    var highlights = highlightsGenerator();
    var owner = [faker.name.firstName(),faker.internet.avatar()];
    var property_features = [faker.random.number(10),faker.random.number(6),faker.random.number(6),faker.random.number(4)]
    csvData += `${title},${location},${home_type},${short_description},"{${more_description}}","{${highlights}}","{${owner}}","{${property_features}}"\n`
   return csvData; 
  }

  const highlightsGenerator = () => {
    var arr = [];
    let possibleHighlights = [
      {
        head: 'Great check-in experience',
        body: faker.lorem.sentence(),
      },
      {
        head: 'Great location',
        body: faker.lorem.sentence(),
      },
      {
        head: 'Self check-in',
        body: faker.lorem.sentence(),
      },
      {
        head: 'Sparkling clean',
        body: faker.lorem.sentence(),
      },
      {
        head: 'Breakfast',
        body: faker.lorem.sentence(),
      },
      {
        head: 'Indoor fireplace',
        body: faker.lorem.sentence(),
      },
    ]
    for (var i = 0; i < 3; i++) {
      let index = parseInt(Math.random() * possibleHighlights.length);
      if(possibleHighlights[index]){
       arr.push(`${possibleHighlights[index].head}`)
       arr.push(`${possibleHighlights[index].body}`)
       possibleHighlights.splice(index, 1);
      }
      
    }
    return arr;
}

const moreDescriptionGenerator = () => {
  let possibleDescriptions = [
    {
      head: 'Guest access',
      body: faker.lorem.sentence(),
    },
    {
      head: 'Interaction with guests',
      body: faker.lorem.sentence(),
    },
    {
      head: 'Other things to note',
      body: faker.lorem.sentence(),
    },
  ];
  let arr = ['The space',`${faker.lorem.paragraph()}`];

  for (var i = 0; i < faker.random.arrayElement([1, 2, 3]); i++) {
    let index = parseInt(Math.random() * possibleDescriptions.length);
    if(possibleDescriptions[index]) {
      arr.push(`${possibleDescriptions[index].head}`);
      arr.push(`${possibleDescriptions[index].body}`);
      possibleDescriptions.splice(index, 1);
    }
  }
return arr
}

function writeData() {
  for(var streams = 1; streams <= 5000; streams++) {
    console.time('batch')
    var data = ''
      for (var i = 1; i <= 2000;i++) {
        data += generateGeneralInfo();
      }
    stream.write(data);
    stream.on('drain',function(){
      console.log('drain')
    })
    console.timeEnd('batch')
    console.log(`batch ${streams} written to file`)
  }
}

writeData();
