const request =require('request')

const forecast=(latitude, longitude ,callback) =>{
    const url = 'https://api.darksky.net/forecast/b6979d786d52884aab2dcc86d2890e68/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)

    request({url, json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }else if(body.error){
            callback('Unable to find weather. Try anotther search.',undefined)
        }else{
            callback(undefined, 
                body.daily.data[0].summary +' It is currently '+ body.currently.temperature + ' degrees out. This high today is '+body.daily.data[0].temperatureHigh+' with  a low of '+body.daily.data[0].temperatureLow+'. There is a '+ body.currently.precipProbability  +'% chance of rain.'
            )
        }
    })
}

module.exports = forecast




//const url = 'https://api.darksky.net/forecast/b6979d786d52884aab2dcc86d2890e68/37.8267,-122.4233'
/*
request({url: url, json:true},(error, response) =>{
    if(error){
        console.log('Unable to connect to weather service!')
    }else if(response.body.error){
        console.log('Unable to find location')
    }else{
        console.log(response.body.daily.data[0].summary+ ' It is currently '+response.body.currently.temperature + ' degrees out. There is a '+response.body.currently.precipProbability+'% change of rain.')
    }
})
*/