const fs = require("fs");
const { parse } = require("csv-parse");
const { GetSortOrder } = require("./utils/helpers");

try {
  const parser = parse({ columns: true }, function (err, records) {
    // console.log(records);
    const result = records.sort(
      GetSortOrder("Road deaths per million inhabitants")
    );
    console.log(result);
  });
  fs.createReadStream(__dirname + "/road-safety-data.csv").pipe(parser);
} catch (error) {
  console.log(error);
}
