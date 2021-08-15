const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body:', argv.body)
    }
})

// Crate remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    hadler: function () {
        console.log('Removing the note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('List all the notes!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function() {
        console.log('Read the note!')
    }
})


// add, remove, read, list

yargs.parse()

// console.log(yargs.argv)