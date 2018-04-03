var somepromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey. It worked')  
    },2000)
  
})

somepromise.then((message) => {
    console.log(`Success${message}`)
}, (errorMessage) => {
    console.log(`Error: ${errorMessage}`)
})


var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(typeof a == 'number' && typeof b == 'number'){
                resolve(a+b)
            }else{
                reejct('Arguments are not correct')
            }
        })
    })
}


// asyncAdd(5, 7).then((res) => {
//     console.log(`results: &{res}`)
//     return asyncAdd(res, 33)
// }, (errorMessage)=>{
//     console.log(errorMessage)
// }).then((res)=>{
//     console.log(res)
// }, (errorMessage)=>{
//     console.log(errorMessage)
// })

asyncAdd(5, 7).then((res) => {
    console.log(`results: &{res}`)
    return asyncAdd(res, 33)
}).then((res)=>{
    console.log(res)
}).catch((errorMessage)=>{
    console.log(errorMessage)
})
