const express = require('express');
var path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' })

const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// Parse URL-encoded badies (as send bt HTML forms)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'hbs');

// Routes
app.use('/', require('./routes/pages'));
app.use('/webhook', require('./routes/webhook'));



app.listen(3335, () => {
    console.log('Server started on port 3335...');
});

