const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Экспортируем приложение без прослушивания
module.exports = app;


