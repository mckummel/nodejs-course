const request = require('request');

var geoApiKey = process.env.mapsGeoKey;

var cityUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=Porto%20Alegre%20Brasil&key=${geoApiKey}`;

request({
    url: cityUrl,
    json: true
},(error, response, body)=>{
    //console.log(JSON.stringify(body,undefined,2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
});