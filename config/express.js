const app = require('express')();
const bodyParser = require('body-parser');
const consign = require('consign');

app.use(bodyParser.json());

consign({ cwd : 'app' })
    .include('helpers')
    .then('errors')
    .then('models')
    .then('api')
    .then('routes')
    .then('docs')
    .into(app);

module.exports = app;