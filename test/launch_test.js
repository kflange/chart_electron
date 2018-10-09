const assert = require("assert");
const createApplication = require("./createApplication");


describe("startup test", function() {
  this.timeout(10000);
  let app;


  beforeEach(function() {
    app = createApplication();
    return app.start();
  });


  afterEach(function() {
    return app.stop();
  });


  it("output a window", function() {
    return app.client.getWindowCount()
      .then((count) => assert.equal(count, 1));
  });
});
