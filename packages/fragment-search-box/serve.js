const express = require('express');
const Podlet = require('@podium/podlet');

const port = process.env.PORT || 8080;
const app = express();
const podlet = new Podlet({
    name: 'search',
    version: '1.0.0',
    pathname: '/',
    development: process.env.NODE_ENV !== 'production'
});
podlet.js([
    {value: '/public/bundle.js'},
]);

app.use('/public/', express.static('public'));
app.use(podlet.middleware());
app.get(podlet.manifest(), (req, res) => {
    res.status(200).send(podlet);
});
app.get(podlet.content(), (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port);
