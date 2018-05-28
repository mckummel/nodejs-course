const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
    .help()
    .alias('help','h')
    .argv;

var address = encodeURIComponent(argv.a);
var geoApiKey = process.env.mapsGeoKey;

var cityUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geoApiKey}`;

request({
    url: cityUrl,
    json: true
},(error, response, body)=>{
    //console.log(JSON.stringify(body,undefined,2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
});