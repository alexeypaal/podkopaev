const request = require('supertest');
const app = require('./index');
const http = require('http');

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3000, done);
});

afterAll((done) => {
    server.close(done);
});

describe('GET /', () => {
    it('responds with Hello World', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello World');
    });
});


