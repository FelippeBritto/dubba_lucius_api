module.exports = () => {
    const newsServices = {};
    

    return newsServices;
}

newsServices.getFontsFromDubba = ()=>{   
    Httpreq.open("GET", fonts_api_url, false);
    Httpreq.send(null);
    
    var responseBody = Httpreq.responseText; 
    responseBody = JSON.parse(responseBody);

    return responseBody;
};

newsServices.getFeedByFonts = async () => {
    // For a best performace it can be changed
    const fontsArray = await newsServices.getFontsFromDubba();

    for (const font of fontsArray){
        var feed = {
            'font_URL' : await font.url,
            'font_code': await font.cod_fonte,
            'last_news': await font.ultima_noticia,
            'feed': null
        };

        console.warn('BE PATIENT! MAX. 120s')
        console.log('Saving from font code: ' + feed.font_code)

       await Httpreq.open("GET", feed.font_URL, false);
        Httpreq.send(null);
        
        feed.feed = Httpreq.responseText
        // Forma mais limpa v
        // font.feed = Httpreq.responseText

        feedsArray.push(feed);
    };

    console.log({
        'Saved Feeds': feedsArray.length
    })

    return feedsArray;
};