const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = process.argv[2];

switch (command) {
    case 'add':
        console.log('Adding new note');
        var note = notes.addNote(argv.title, argv.body);
        if (note)
            notes.logNote(note);
        else
            console.log('Error, note not created');
        break;
    case 'list':
        console.log('Listing all notes');
        var allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s)`);
        allNotes.forEach((note)=> notes.logNote(note));
        break;
    case 'read':
        var note = notes.getNote(argv.title);
        notes.logNote(note);
        break;
    case 'remove':
        var noteRemoved = notes.removeNote(argv.title);
        var message = noteRemoved ? 'Note was removed' : 'Note not found';
        console.log(message);
        break;
    default:
        console.log('Command not recognized');
}