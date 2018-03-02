const liste = require("../liste_journalistes");

let Autors_Re = "";
let mess = "";

// const liste = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
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

// /**
//  * Configure `router` to get `/json` authors
//  * @property /json
//  * @type {function}
//  * @default {json} json
//  */
// router.get("/", (req, res) => {
//   console.log(liste)
//   res.json(liste).status(200);
// });

/**
 * Configure `router` to get `/json` authors
 * @property /json
 * @type {function}
 * @default {json} json
 */
router.get("/listePerma", (req, res) => {
  // console.log(liste)
  res.json([Autors_Re, mess, liste]).status(200);
});

router.get("/save", (req, res) => {
  // console.log(liste)
  res.json([Autors_Re, mess]).status(200);
});

router.get("/", (req, res) => {
  // console.log(liste)
  res.json(liste).status(200);
});

/**
 * Configure `router` to get `/json` authors
 * @property /json
 * @type {function}
 * @default {json} json
 */
router.get("/perma/:authors/mess/:mess", (req, res) => {
  Autors_Re = req.params.authors;
  mess = req.params.mess;
  console.dir(req.params.authors);
  console.dir(req.params.mess);
  res
    .send("Merci les permanencier(es) vont être ==>" + req.params.authors)
    .status(200);
});

module.exports = router;
