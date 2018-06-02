const request = require('request');

var geocodeAddress = (inputAddress) => {
    return new Promise((resolve,reject)=>{
        var address = encodeURIComponent(inputAddress);
        //environment key so my key is not public
        var geoApiKey = process.env.mapsGeoKey;
    
        var cityUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geoApiKey}`;
    
        request({
            url: cityUrl,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address');
            } else if (body.status === 'OVER_QUERY_LIMIT') {
                reject('Quota limit reached');
            } else if (body.status === 'REQUEST_DENIED') {
                reject('Request denied');
            } else if (body.status === 'INVALID_REQUEST') {
                reject('Address, components or latlng are missing');
            } else if (body.status === 'UNKNOWN_ERROR') {
                reject('A server error occurred, try again.');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('0').then((res)=>{
    console.log(JSON.stringify(res));
},(errorMessage)=>{
    console.log(errorMessage);
});