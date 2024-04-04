var fs = require("fs").promises;
var path = require("path");
const directory = "test";
const deleteFiles = async () => {
  for await (const file of fs.readdir(directory)) {
    await fs.unlink(path.join(directory, file));
  }
};
deleteFiles();
