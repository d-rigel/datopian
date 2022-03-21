const fs = require("fs");

//function to sort the array of objects
function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}

//function to write result to file
function writeResult(filename, content) {
  fs.writeFile(filename, content, function (err) {
    if (err) return console.log(err);
    console.log(content);
  });
}

module.exports = {
  GetSortOrder,
  writeResult,
};
