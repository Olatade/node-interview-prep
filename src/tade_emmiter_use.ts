const Emmiter = require("./emmiter");

const myEmmiter = new Emmiter();

myEmmiter.on("shout", () => {
  console.log("i am shouting");
});

setTimeout(() => {
  myEmmiter.emmit("shout");
  process.exit()
}, 3000);
