const request = require('request');

var getWeather = (lat, lng, callback) => {

    //environment key so my key is not public
    var weatherKey = process.env.weatherKey;
    var weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}`;
    request({
        url: weatherUrl,
        json: true
    }, (error, response, body) => {
        if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else if (response.statusCode === 404) { //passing the error message back
            callback('Not found.');
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports = {
    getWeather: getWeather
}