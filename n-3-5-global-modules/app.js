console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var filteredArray = _.uniq(['Robert', 1, 'Robert', 1, 2, 3, 4]);
console.log(filteredArray);
