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
    if(error)
    {
        console.log('Unable to connect to google servers.');
    }
    else if(body.status === 'ZERO_RESULTS')
    {
        console.log('Unable to find that address');
    }
    else if(body.status === 'OVER_QUERY_LIMIT')
    {
        console.log('Quota limit reached');
    }
    else if(body.status === 'REQUEST_DENIED')
    {
        console.log('Request denied');
    }
    else if(body.status === 'INVALID_REQUEST')
    {
        console.log('Address, components or latlng are missing');
    }
    else if(body.status === 'UNKNOWN_ERROR')
    {
        console.log('A server error occurred, try again.');
    }
    else if(body.status === 'OK')
    {
        //console.log(JSON.stringify(body,undefined,2));
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
    }
    
});