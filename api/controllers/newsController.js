module.exports = () => {
    const newsController = {};
    const newsServices = require('../services/newsServices')();

newsController.getNewsFonts = (req, res) => {
        var response =  newsServices.getFontsFromDubba();
          res.status(200).json(response)
}
    
newsController.getFeedByFonts = async (req, res) => {
        var response = await newsServices.getFeedByFonts();
          res.status(200).json(response)
}
    return newsController;
}




