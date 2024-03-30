const fs = require("fs");

const fileContent = fs.readFileSync(`${__dirname}/file.txt`, "utf8");
console.log(fileContent);

const anotherFileContent = fs.readFile(
  `${__dirname}/file.txt`,
  "utf8",
  (err, data) => {
    console.log(data);
  }
);
console.log('done');
