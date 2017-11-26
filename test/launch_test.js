const Application = require("spectron").Application;
const electron = require("electron");
const path = require("path");

const app = new Application({
  path: electron,
  args: [path.join(__dirname, "..")],
});


app.start()
  .then(() => app.client.getWindowCount())
  .then((count) => {
    console.log((count === 1) ?  "success test :)" : "failed test :(");
   app.stop();
  });
