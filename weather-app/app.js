const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const request = require('request');

const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
        
        var lat = results.latitude;
        var lng = results.longitude;

        var weatherKey = process.env.weatherKey;

        var weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}`;
        request({
            url: weatherUrl,
            json: true
        }, (error, response, body) => {
            if (response.statusCode === 200) {
                console.log(body.currently.temperature);
            } else if (response.statusCode === 404) {
                console.log('Not found.')
            } else {
                console.log('Unable to fetch weather');
            }
        });
    }
});