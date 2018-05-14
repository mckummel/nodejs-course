//var obj = {
//    name: 'Andrew'
//};

//var stringObj = JSON.stringify(obj);
//console.log(stringObj);

//var personString = '{"name":"Matheus","age":26}';
//var personObj = JSON.parse(personString);

//console.log(personString);
//console.log(typeof(personObj));

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);