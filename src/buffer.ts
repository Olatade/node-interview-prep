const { Buffer: Something } = require("node:buffer");

const buf = Something.from("Hello", "utf8");

buf.write('hahaha')

console.log(buf.toString());
