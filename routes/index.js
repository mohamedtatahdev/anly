const router = require('express').Router();
const Activity = require('../database/models/activity.model'); // Ton modèle MongoDB
const api = require('./api');

router.use('/api', api);

// Route pour afficher le formulaire de création d'une activité
router.get('/activity/new', async (req, res) => {
  try {
    // Définir les options pour les catégories, âges et durées
    const categories = ['Jeux sportifs', 'Activités en plein air', 'Jeux d\'intérieur', 'Jeux d\'intérieur calme', 'Jeux de rôle', 'Jeux coopératifs',
                        'Activités manuelles', 'Jeux créatifs', 'Jeux d\'adresse', 'Jeux de réflexion', 'Jeux sensoriels',
                        'Jeux de motricité', 'Jeux de société', 'Jeux de connaissances', 'Jeux d\'équipe', 'Jeux de coordination',
                        'Activités scientifique', 'Jeux de concentration'];
    
    const ageRanges = ['3-5 ans', '6-8 ans', '9-11 ans', '12-14 ans', '15-17 ans'];
    
    const durations = ['Moin de 15min', '15min à 30min', '30min à 1h', '1h à 2h', 'Demi journée', 'Journée ou +'];
    
    // Passer ces options à la vue
    res.render('activities/activity-form', { categories, ageRanges, durations, errors:{} });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
});

// Route pour afficher la liste des activités
router.get('/', (req, res) => {
  Activity.find({})
          .exec()
          .then( activities => res.render('activities/activity-list', {activities}) )
  ;
});

module.exports = router;
