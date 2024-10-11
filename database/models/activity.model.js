const mongoose = require('mongoose');
const schema = mongoose.Schema;

const activityShema = schema({
    name: {
        type: String,
        required: [true, 'Veuillez renseigner le nom'],
        trim: true,
      },
    category: {
        type: [String],
        enum: ['Jeux sportifs','Activités en plein air','Jeux d\'intérieur','Jeux d\'intérieur calme','Jeux de rôle','Jeux coopératifs',
               'Activités manuelles','Jeux créatifs','Jeux d\'adresse','Jeux de réflexion','Jeux sensoriels',
               'Jeux de motricité','Jeux de société','Jeux de connaissances','Jeux d\'équipe','Jeux de coordination',
               'Activités scientifique','Jeux de concentration'],
        required: [true, 'Veuillez renseigner la tranche d\'âge'],
      },
    age: {
        type: String,
        enum: ['3-5 ans', '6-8 ans', '9-11 ans', '12-14 ans', '15-17 ans'],
        required: [true, 'Veuillez renseigner la tranche d\'âge'],
      },
    size: {
        type: Number,
        required: [true, 'Veuillez renseigner l\'effectif'],
      },  
    duration: {
        type: String,
        enum: ['Moin de 15min', '15min à 30min', '30min à 1h', '1h à 2h', 'Demi journée', 'Journée ou +'],
        required: [true, 'Veuillez renseigner la durée'],
      },     
    place: {
        type: String,
        trim: true,
        required: [true, 'Intérieur ou Exterieur?'],
      }, 
    objective: {
        type: String,
        required: [true, 'Veuillez renseigner les objectifs'],
        trim: true,
      },
    material: {
        type: String,
        required: [true, 'Veuillez renseigner le matériel nécessaire'],
        trim: true,
      },
    planning: {
        type: String,
        required: [true, 'Veuillez renseigner la sensibilisation ou l\'aménagement'],
        trim: true,
      },
    progress: {
        type: String,
        required: [true, 'Veuillez renseigner le déroulement'],
        trim: true,
      },
    conclusion: {
        type: String,
        required: [true, 'Veuillez renseigner la conclusion ou le rangement'],
        trim: true,
      },
});



const Activity = mongoose.model('activity', activityShema);

module.exports = Activity;