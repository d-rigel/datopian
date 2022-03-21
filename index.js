const fs = require("fs");
const { parse } = require("csv-parse");
const { GetSortOrder, writeResult } = require("./utils/helpers");

try {
  const parser = parse({ columns: true }, function (err, records) {
    // sorting the returned objects
    const result = records.sort(
      GetSortOrder("Road deaths per million inhabitants")
    );
    const newResult = JSON.stringify(result);
    // console.log(result);
    writeResult("resultData.js", newResult);
  });
  fs.createReadStream(__dirname + "/road-safety-data.csv").pipe(parser);
} catch (error) {
  console.log(error);
}
