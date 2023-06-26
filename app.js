const express = require('express');

const app = express();

app.get('/', (request, response) => {
    let date = new Date();
    let modifiedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    response.send(modifiedDate);
});

app.listen(3000);


module.exports = app;