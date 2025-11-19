const fs = require('node:fs');
const path = require("path")

fs.readFile('../files/starter.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


console.log("hello.....")