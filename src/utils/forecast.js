const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=37b09c5d0c5d4d3e039f766debc7dbf7&query=' + latitude + ',' + longitude +'&units=f'
        
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined) 
        } else if (body.error) {
            callback('Unable to find location, try again', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + " in " + body.location.name + ". It is currently " + body.current.temperature + " degrees.")
        }
    })
}


module.exports = forecast