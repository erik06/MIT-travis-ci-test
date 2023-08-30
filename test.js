const assert = require("assert");
const app = require("./app");

describe("App", () => {
  it("should return 'Hello World!' when visiting the root URL", (done) => {
    app.get("/", (req, res) => {
      assert.equal(res.statusCode, 200);
      assert.equal(res.text, "Hello World!");
    });
    done();
  });
});
