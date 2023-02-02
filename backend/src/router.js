const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const ProjetControllers = require("./controllers/projetControllers");
const TechnoControllers = require("./controllers/technoControllers");
const EntrepriseControllers = require("./controllers/entrepriseControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// Route pour back Projet ____________________

router.get("/projets", ProjetControllers.browse);
router.get("/projets/:id", ProjetControllers.read);
router.put("/projets/:id", ProjetControllers.edit);
router.post("/projets", ProjetControllers.add);
router.delete("/projets/:id", ProjetControllers.destroy);

// Route pour back techno ____________________

router.get("/technos", TechnoControllers.browse);
router.get("/technos/:id", TechnoControllers.read);
router.put("/technos/:id", TechnoControllers.edit);
router.post("/technos", TechnoControllers.add);
router.delete("/technos/:id", TechnoControllers.destroy);

// Route pour back entreprises ____________________

router.get("/entreprises", EntrepriseControllers.browse);
router.get("/entreprises/:id", EntrepriseControllers.read);
router.put("/entreprises/:id", EntrepriseControllers.edit);
router.post("/entreprises", EntrepriseControllers.add);
router.delete("/entreprises/:id", EntrepriseControllers.destroy);

module.exports = router;
