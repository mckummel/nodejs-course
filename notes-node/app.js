const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

var notesResult = notes.addNote();

console.log(notesResult);

console.log(`Add result: ${notes.add(10,130)}`);


// Lodash isString utility
console.log(_.isString(true));

console.log(_.isString('Andrew'));

console.log(_.isString(12));

// Lodash uniq (removes duplicates)
var filteredArray = _.uniq([2,1,2,2,2,'Matheus','Test','Matheus']);
console.log(filteredArray);

/*fs.appendFile('greetings.txt',`Hello! You are: ${notes.age}`,function(err){
    if(err){}
});*/