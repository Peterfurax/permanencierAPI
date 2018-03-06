/**
 * Provides modules WEB server
 * @module WEB
 * @class  WEB server
 */

const http = require("http");
const express = require("express");
const port = process.env.PORT || 4001;
const routes = require("./routes/index");
const compression = require("compression");
const bodyParser = require("body-parser");

/**
 * Configure `app` to use `express()`
 * @property app
 * @type {function}
 */
const app = express();
/**
 * Configure `app` to use `routes`
 * @property route
 * @type {object}
 */
app.use(routes);
/**
 * Configure `app` to use `bodyParser()`
 * @property bodyParser
 * @type {object}
 */
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

/**
 * Configure `app` to `disable("x-powered-by")`
 * @property disable x-powered-by
 * @type {object}
 */
app.disable("x-powered-by");

/**
 * Configure `app` to use `bodyParser.json()`
 * @property bodyParserJson
 * @type {object}
 */
app.use(bodyParser.json());

/**
 * Configure `app` to set `{"json spaces", 2}`
 * @property indentJson2Spaces
 * @type {object}
 */
app.set("json spaces", 2);

/**
 * Configure `app` to use `compression()`
 * @property compressHttpResponse
 * @type {object}
 */
app.use(compression);

// Init webServer
const server = http.createServer(app);

// Init  webServer port listen
server.listen(port, () => console.log(`Permanencier API On Port : ${port}`));

module.exports = {
  app: app
};
