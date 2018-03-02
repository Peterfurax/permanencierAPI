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
  res.json([Autors_Re, mess, liste]).status(201);
});

router.get("/save", (req, res) => {
  // console.log(liste)
  res.json([Autors_Re, mess]).status(201);
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
// router.get("/datePar/:datePar/perma/:perma/messG/:messG/rcWeb/:rcWeb/urgence/:urgence/informatique/:informatique", (req, res) => {
router.get(
  "/datePar/:datePar/perma/:perma/general/:general/redacChefWeb/:redacChefWeb/urgence/:urgence/informatique/:informatique",
  (req, res) => {
    // // Autors_Re = req.params.authors;
    // // mess = req.params.mess;
    // // console.dir(req.params.authors);
    console.dir(req.params.datePar);
    console.dir(req.params.perma);
    console.dir(req.params.general);
    console.dir(req.params.redacChefWeb);
    console.dir(req.params.urgence);
    // console.dir(req.params.messG);
    // console.dir(req.params.rcWeb);
    // console.dir(req.params.urgence);
    // console.dir(req.params.informatique);
    res
      .send(
        "Merci les permanencier(es) vont être ==>" +
          "DATE PAR " +
          req.params.datePar +
          " PERMA" +
          req.params.perma +
          " GENE" +
          req.params.general +
          " RCW" +
          req.params.redacChefWeb +
          " INFO" +
          req.params.informatique
      )
      .status(201);
  }
);

module.exports = router;
