const app = require('./config/express')();
const port = app.get('port');

app.listen(port, () => {
    console.log('Server up and running at ' + port + ' port!')
})