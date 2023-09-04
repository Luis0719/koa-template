const Koa = require("koa");
const app = new Koa();
const port = 3000;


/**
 * The function builds a server that responds with "Hello world" to all requests.
 * @return {app} The `app` object is being returned.
 */
function buildServer() {
  app.use(async (ctx) => {
    ctx.body = "Hello world";
  });

  // Return app so it can be used by tests.
  return app;
}

/**
 * The StartServer function starts a server and listens on a specified port.
 */
function startServer() {
  buildServer();

  app.listen(port);
  console.log(`Listening on port ${port}`);
}

module.exports = { buildServer, startServer }
