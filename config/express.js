const express = require('express');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.set('port', process.env.PORT || 3000 );

    app.use(bodyParser.json());

    require('../api/routes/newsRoutes')(app);

    return app;
}