const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var result = notes.addNote();

console.log(result);

/*fs.appendFile('greetings.txt',`Hello! You are: ${notes.age}`,function(err){
    if(err){}
});*/