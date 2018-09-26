const express = require('express');
const app = express();
const hbs = require('hbs');
require('./helpers/hbs');

// config port to heroku and local env
const port = process.env.PORT || 8080;

app.use(express.static( __dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// HBS render example
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Fabian'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// JSON service example
// app.get('/', (req, res) => {
//     let result = {
//         name: 'Item',
//         value: '123',
//         color: 'blue'
//     };
//     res.send(result);
// });

// response example
// app.get('/data', (req, res) => {
//     res.send('Hi Data');
// });

app.listen(port, () => {
    console.log(`listening http://localhost:${ port }`);
});
