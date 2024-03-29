const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/eb4a1a45d74cc513a406a3f36f45a1dc/' + latitude + ',' + longitude

request({ url, json: true}, (error, { body }) => {
if (error) {
callback('Unable to connect to weather service!', undefined)
} else if (body.error) {
callback('Unable to find location', undefined)
} else {
callback(undefined, body.daily.data[0].summary + ' it is currently' + body.currently.temperature + 'degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
}
})
}

module.exports = forecast