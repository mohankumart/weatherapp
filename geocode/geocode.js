const request = require('request')

module.exports.geocodeAddress = (addres, callback) => {
    let address = encodeURIComponent(addres)
    console.log(address)
    request({
        'url': `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
    
    }, (error, response, body)=>{
        console.log(response)
        if(error){
            console.log(error)
        }else if(body.status == 'ZERO_RESULTS'){
           console.log('zero results')
        }else if(body.status == 'OK'){
            console.log('response is ok')
            console.log(body)
            callback(undefined, body)
        }
    })
}

module.exports.getCurrentTemperature = (latitude, longitude, callback) => {
    request({
        'url': `https://api.darksky.net/forecast/4a445c93da234cba04b36ec20ad82045/${latitude},${longitude}`,
        json: true
    
    }, (error, response, body)=>{
        console.log(response)
        debugger
        if(error){
            console.log(error)
        }else if(body.status == 'ZERO_RESULTS'){
           console.log('zero results')
        }else if(body.status == 'OK'){
            console.log('response is ok')
            console.log(body)
            callback(undefined, body)
        }
    })
}