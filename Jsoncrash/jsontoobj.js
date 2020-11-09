var fs = require('fs');
var faker = require('faker');


const { database } = require('faker');

var data = fs.readFileSync("demo.json").toString();

console.log(data);

data.forEach(function(elem){
    console.log(elem.name, elem.email);
})