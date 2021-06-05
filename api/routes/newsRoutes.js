module.exports = app => {
    const newsController = require('../controllers/newsController')();
    const uri = '/api/v1';

app.route(uri + '/getFonts')
    .get(newsController.getNewsFonts);

app.route(uri + '/getFeeds')
    .get(newsController.getFeedByFonts);

}

