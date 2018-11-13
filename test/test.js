'use strict';

var expect = require('chai').expect;
var geo = require('../index');

describe('#GEO', function () {
    it('should convert single digits', function () {
        var result = geo.test(1);
        expect(result).to.equal('1');
    });

    it('should convert double digits', function () {
        var result = geo.test(12);
        expect(result).to.equal('12');
    });

    it('should convert triple digits', function () {
        var result = geo.test(123);
        expect(result).to.equal('123');
    });

    it('should convert 4 digits', function () {
        var result = geo.test(1234);
        expect(result).to.equal('1,234');
    });

    it('should convert 5 digits', function () {
        var result = geo.test(12345);
        expect(result).to.equal('12,345');
    });

    it('should convert 6 digits', function () {
        var result = geo.test(123456);
        expect(result).to.equal('123,456');
    });

    it('should convert 7 digits', function () {
        var result = geo.test(1234567);
        expect(result).to.equal('1,234,567');
    });

    it('should convert 8 digits', function () {
        var result = geo.test(12345678);
        expect(result).to.equal('12,345,678');
    });

    it('should return an object', function(){
        var result = geo.getGeo((error, response) => {
            console.log(response);
            expect(response).to.exist();
        });

    });

    it('should throw an error', function(){
        expect(geo.getGeo.bind()).to.throw('Callback is missing or is not a function');
    });
});