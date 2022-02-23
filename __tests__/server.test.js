`use strict`;
const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe("Test server", () => {


    it('Test 404 with bad method', async () => {
        const response = await request.post('/person?name=nedal');
        expect(response.status).toEqual(404);
    })

    it('Test 404 with bad route', async () => {
        const response = await request.get('/persoone?name=nedal')
        expect(response.status).toEqual(404)
    })


    it('Test 500 if no name in query', async () => {
        let response = await request.get('/person');
        expect(response.status).toEqual(500);
    })

    it('Test object in /person', async () => {
        const response = await request.get('/person?name=nedal')
        const name = response.body.name;
        expect(typeof response.body).toEqual('object')
        expect(name).toEqual('nedal')

    })

    it('Test 200 in /person', async () => {
        const response = await request.get('/person?name=nedal')
        expect(response.status).toEqual(200)

    })

})