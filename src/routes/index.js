const listeJournaliste = require("../liste_journalistes");
var store = require("data-store")("my-app");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
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

/**
 * Configure `router` to receice post from clt
 * @property /go
 * @type {function}
 * @default {httpStatus}
 */
router.post("/go", jsonParser, (req, res) => {
  const RB = req.body;
  if (!RB) res.sendStatus(400);
  if (RB) {
    if (RB.datePar !== null) store.set({ datePar: RB.datePar });
    if (RB.perma !== null) store.set({ perma: RB.perma });
    if (RB.general !== null) store.set({ general: RB.general });
    if (RB.redacChefWeb !== null) store.set({ redacChefWeb: RB.redacChefWeb });
    if (RB.urgence !== null) store.set({ urgence: RB.urgence });
    if (RB.informatique !== null) store.set({ informatique: RB.informatique });
    res.sendStatus(201);
  }
  console.log(store.get("perma"))
  res.end();
});

module.exports = router;
