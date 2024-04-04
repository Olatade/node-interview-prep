import * as fs from "fs";

const readable = fs.createReadStream(`${__dirname}/file.txt`, {
  encoding: "utf8",
  highWaterMark: 16 * 1024,
});

const writable = fs.createWriteStream(`${__dirname}/file2.txt`);

// readable.on("data", function (chunk) {
//   console.log(chunk.length);
//   writable.write(chunk);
// });


readable.pipe(writable);