const request = require('request')
const yargs = require('yargs')

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch waether info',
        string: true
    }    
})
.help()
.alias('help', 'h')
.argv;

let address = encodeURIComponent(argv.a)
console.log(address)
request({
    'url': `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true

}, (error, response, body)=>{
    if(error){
        console.log(error)
    }else if(body.status == 'ZERO_RESULTS'){
       console.log('error in request')
    }else if(body.status == 'OK'){
        console.log('response is ok')
    }
    
})