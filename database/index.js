const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mohamedberthaudiere:Rywt0EnKaB3v1YJ5@cluster0.wtzc1.mongodb.net/anly?retryWrites=true&w=majority&appName=Cluster0')
        .then( () => console.log('connexion db ok!'))
        .catch( err => console.log(err));