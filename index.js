const express = require("express");

// On récupère les différentes routes qui ont été créer
const router = require("./routes");

const app = express();

// On définit le port sur lequel sera executé l'API
const PORT = process.env.PORT || 4000;

// On utilise express.json() afin de pouvoir lire du json et traiter les informations comme le body d'une requête
app.use(express.json());

// On définit le endpoint de base pour executer les routes sur "/myMath"
app.use("/myMath", router);

// On lance l'API sur le port définit précédement
app.listen(PORT);

// Puis on l'affiche dans les logs
console.log(`Server is listening on PORT ${PORT}`);