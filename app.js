const yargs = require('yargs')
const geocode = require('./geocode/geocode')

// const argv = yargs.options({
//     a: {
//         demand: true,
//         alias: 'address',
//         describe: 'Address to fetch waether info',
//         string: true
//     }    
// })
// .help()
// .alias('help', 'h')
// .argv;

const argv = yargs.options({
    latitude: {
        demand: true,
        describe: 'laitude'
    },
    longitude: {
        demand: true,
        describe: 'longitude'
    }
}).argv

// geocode.geocodeAddress(argv.address,(errorMessage, results)=>{
//     console.log(results)
// })

geocode.getCurrentTemperature(argv.latitude, argv.longitude, (errorMessage, results) => {
    console.log(results)
})