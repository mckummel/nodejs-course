const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString);
    }
    catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note)=>{
        return note.title === title;
    });

    if(duplicateNotes.length === 0)
    {
        notes.push(note);
        saveNotes(notes);

        return note;
    }
   
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNote = notes.filter((note)=>note.title === title)[0];

    return filteredNote;
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=>note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    debugger;
    console.log(`Title: ${note.title}. Body: ${note.body}`);
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote,
    removeNote,
    logNote
};