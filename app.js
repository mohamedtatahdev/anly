const express = require('express');
const morgan = require('morgan');
const path = require('path');
const index = require('./routes');
require('./database')
const app = express();
require('dotenv').config({path: './config/.env'});
const ejsLayouts = require('express-ejs-layouts');

app.use(ejsLayouts);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layout');  // layout.ejs sera le fichier de layout par défaut

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);

app.listen(process.env.PORT);