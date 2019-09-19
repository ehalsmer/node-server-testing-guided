const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
    describe('GET /', () => {
        it('returns 200 OK', () => {
            // make a GET request to the / endpt on the server
            return request(server).get('/').then(res => {
                expect(res.status).toBe(500);
            })
            // assert that we get an http status code 200
        })
    })
})