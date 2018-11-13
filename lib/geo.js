///--- Globals
var request = require('request');

var DEFAULT_URL = 'http://ip-api.com/json';

///--- Exported API
module.exports = {
    getGeo: function (callback) {
        let url = DEFAULT_URL;

        if (typeof callback !== 'function') {
            throw new Error('Callback is missing or is not a function');
        }

        request.get(url, { json: true }, (error, response, body) => {
            var statusCode = response.statusCode;
            var isOk = statusCode === 200;

            /* istanbul ignore else */
            if (error) {
                return callback(error);
            } else {
                if (isOk) {
                    var responseBody = JSON.stringify(body);
                    return callback(null, responseBody);
                } else{
                    return callback(new Error(`Response returned ${statusCode}`));
                }

            }
        });
    },

    test: function (number, locale) {
        return number.toLocaleString(locale);
    }
}

