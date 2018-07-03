const request = require('supertest');
const app = require('../../server/app');

describe('Server endpoint/path tests', () => {
  test('Should respond to GET method to base endpoint', () => {
    return request(app).get('/rooms/50/').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
  test('Should respond to GET method to general enpoint', () => {
    return request(app).get('/api/rooms/50/general/').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
  test('Should respond to GET method to amenities enpoint', () => {
    return request(app).get('/api/rooms/50/amenities/').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});
