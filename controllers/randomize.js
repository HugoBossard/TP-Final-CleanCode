module.exports = {
    async randomize (req, res) {
        try {
            // Transforme les nombres en entier et si cela provoque une erreur, alors ce ne sont pas des entiers
            let min = parseInt(req.body.min);
            let max = parseInt(req.body.max);
            // Génère un nombre aléatoire entre la borne max et min et l'arrondit avec "Math.round" pour avoir un entier
            let random_number = Math.round(Math.random() * (max - min));

            // Puis on envoie un status 200 (ok) ainsi que le nombre aléatoir généré
            res.status(200).send({random_number});
        }
        catch ( Error ) {
            // Sinon, en cas d'erreur, on envoit un status 400 et on précise l'erreur
            res.status(400).send("Au moins un des paramètres d'entré n'est pas valide. Entier uniquement");
        }
    }
}