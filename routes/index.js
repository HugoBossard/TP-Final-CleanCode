let express = require("express");
let router = express.Router();

const randomController = require("../controllers/randomize");

// On ajoute une route "get" sur "/randomize" pour avoir le nombre aléatoire dans "randomController" en utilisant la fonction "randomize"
router.get (
	"/randomize",
	randomController.randomize
)

// On exporte le router afin de pouvoir charger les routes dans l'application principale
module.exports = router;