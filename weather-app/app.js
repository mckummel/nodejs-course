const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js')

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

//callbacks chained - geocodeAddress(getWeather)
//Get address,lat,lng from geocodeAPI and use it to get temp
geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        
        var lat = results.latitude;
        var lng = results.longitude;

        weather.getWeather(lat,lng,(errorMessage,weatherResults)=>{
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently: ${weatherResults.temperature}.`);
                console.log(`It feels like: ${weatherResults.apparentTemperature}.`);
            }
        });
    }
});