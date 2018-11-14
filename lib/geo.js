///--- Globals
const axios = require('axios');

var DEFAULT_URL = 'http://ip-api.com/json';

///--- Exported API
module.exports = {
    getGeo: function (options) {
        let url = 'DEFAULT_URL';

        options = options || {};
        if (options.url) {
            url = options.url;
        } else {
            url = DEFAULT_URL;
        }

        return axios
            .get(url)
            .then(response => response.data)
            .catch(error => error);

    }
}

