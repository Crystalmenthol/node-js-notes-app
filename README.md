# Notes-app

This is command-line app use to add note that contain title and content(body) of note

### Tech
- [Yargs] Interactive command line
- [Chalk] Terminal string styling

run `node app.js` and this `command` below to run app

| Command | Option | Describe |
| ------ | ------ | ------|
| add | --title | add note title |
| add | --body | add note content |
| remove | --title | remove note |
| list | | list all note |
| read | --title | read note by selected title |
| add | --title | add note title |

Example
```sh
node app.js add --title="Note_1" --body="This is test note"
```

[Yargs]: <https://www.npmjs.com/package/yargs>
[Chalk]: <https://www.npmjs.com/package/chalk>