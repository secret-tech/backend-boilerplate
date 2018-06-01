import * as chai from 'chai';
import * as factory from './test.app.factory';
require('../../../test/load.fixtures');

chai.use(require('chai-http'));
const { expect, request } = chai;

const postRequest = (customApp, url: string) => {
  return request(customApp)
    .post(url)
    .set('Accept', 'application/json');
};

const getRequest = (customApp, url: string) => {
  return request(customApp)
    .get(url)
    .set('Accept', 'application/json');
};

describe('Secret', () => {
  it('should get secret data', (done) => {
    const token = 'verified_token';

    getRequest(factory.testApp(), '/secret/info').set('Authorization', `Bearer ${ token }`).end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.eq({
        data: 'secret_tech'
      });
      done();
    });
  });

  it('should not get secret data', (done) => {
    const token = 'wrong_token';

    getRequest(factory.testApp(), '/secret/info').set('Authorization', `Bearer ${ token }`).end((err, res) => {
      expect(res.status).to.equal(401);
      expect(res.body.error).to.eq('Not Authorized');
      done();
    });
  });

  it('should throw exception', (done) => {
    getRequest(factory.testApp(), '/secret/status').end((err, res) => {
      expect(res.status).to.equal(500);
      expect(res.body.error).to.eq('Error');
      done();
    });
  });
});
