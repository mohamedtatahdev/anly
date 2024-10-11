const router = require('express').Router(); // Ajoute les parenthèses ici pour créer l'instance de Router
const Activity = require('../database/models/activity.model');

router.post('/', (req, res) => {
    const body = req.body;
    const newActivity = new Activity(body);

    newActivity.save()
        .then(newActivity => res.redirect('/'))
        .catch(err => {
            const errors = {};
            Object.keys(err.errors).forEach(key => {
                errors[key] = err.errors[key].message; // Collecte les erreurs sous forme d'objet
            });
            res.status(400).render('activities/activity-form', { errors });
        });
});

module.exports = router;
