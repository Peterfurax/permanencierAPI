const liste = require("../liste_journalistes")
/**
 * Provides modules WEB server
 * @module WEB
 * @class  WEB routes
 */

const express = require("express");
/**
 * Configure `router` to use `express.Router()`
 * @property app
 * @type {function}
 * @default {router}
 */
const router = express.Router();

/**
 * Configure `router` to get `/json` authors
 * @property /json
 * @type {function}
 * @default {json} json
 */
router.get("/json", (req, res) => {
  console.log(liste)
  res.json(liste).status(200);
});



/**
 * Configure `router` to get `/json` authors
 * @property /json
 * @type {function}
 * @default {json} json
 */
router.get("/:authors", (req, res) => {
  res.send("Merci les permanencier(es) vont être ==>" + req.params.authors).status(200);
});


module.exports = router;
