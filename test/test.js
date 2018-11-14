'use strict';

const expect = require('chai').expect;
const nock = require('nock');
const geo = require('../index');
const response = require('./response');


describe('GEO', () => {
    beforeEach(() => {
        nock('http://ip-api.com')
            .get('/json')
            .reply(200, response)
    });

    it('should get my geocode', () => {
        return geo.getGeo()
            .then(response => {
                //expect an object back
                expect(typeof response).to.equal('object');

                //Test result of name, company and location for the response
                expect(response.status).to.equal('success')
                expect(response.countryCode).to.equal('US')
                expect(response.country).to.equal('United States')
            });
    });

    it('should get my geocode by personal geo url', () => {
        return geo.getGeo({ url: 'http://ip-api.com/json' })
            .then(response => {
                //expect an object back
                expect(typeof response).to.equal('object');

                //Test result of name, company and location for the response
                expect(response.status).to.equal('success')
                expect(response.countryCode).to.equal('US')
                expect(response.country).to.equal('United States')
            });
    });

    it('should get my geocode by personal geo url: invalid url', () => {
        return geo.getGeo({ url: 'https://ip-api.com/json' })
            .then(error => {
                //expecting error
                expect(typeof response).to.equal('object');
            });
    });
});
