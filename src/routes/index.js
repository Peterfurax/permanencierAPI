const listeJournaliste = require("../liste_journalistes");
var store = require("data-store")("my-app");

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
router.get("/listePerma", (req, res) => {
  res
    .json([
      {
        datePar: store.get("datePar"),
        perma: store.get("perma"),
        general: store.get("general"),
        redacChefWeb: store.get("redacChefWeb"),
        urgence: store.get("urgence"),
        informatique: store.get("informatique")
      },
      listeJournaliste
    ])
    .status(201);
});

router.get("/g/:gp", (req, res) => {
  console.log(req.params);
  // res
  //   .json([
  //     {
  //       datePar: store.get("datePar"),
  //       perma: store.get("perma"),
  //       general: store.get("general"),
  //       redacChefWeb: store.get("redacChefWeb"),
  //       urgence: store.get("urgence"),
  //       informatique: store.get("informatique")
  //     },
  //     listeJournaliste
  //   ])
  //   .status(201);
  res.send("ds").status(201)
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
    if (req.params.datePar !== "null")
      store.set({ datePar: req.params.datePar });
    if (req.params.perma !== "null") store.set({ perma: req.params.perma });
    if (req.params.general !== "null")
      store.set({ general: req.params.general });
    if (req.params.redacChefWeb !== "null")
      store.set({ redacChefWeb: req.params.redacChefWeb });
    if (req.params.urgence !== "null")
      store.set({ urgence: req.params.urgence });
    if (req.params.informatique !== "null")
      store.set({ informatique: req.params.informatique });
    res
      .send(
        "Merci les permanencier(es) vont être ==>" +
          "DATE PAR => " +
          req.params.datePar +
          " PERMA => " +
          req.params.perma +
          " GENE => " +
          req.params.general +
          " RCW => " +
          req.params.redacChefWeb +
          " Urgence => " +
          req.params.urgence +
          " INFO => " +
          req.params.informatique
      )
      .status(201);
  }
);
module.exports = router;
