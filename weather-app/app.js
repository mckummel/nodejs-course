const request = require('request');

var cityUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=Porto%20Alegre%20Brasil';

request({
    url: cityUrl,
    json: true
},(error, response, body)=>{
    console.log(body);
});