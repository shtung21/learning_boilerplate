const app = require("./server");

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Knock Knock");
  console.log("Who's There");
  console.log(`Your server, listening on port ${port}`);
});
