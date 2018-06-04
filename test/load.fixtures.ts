const restore = require('mongodb-restore');
import { container } from '../src/ioc.container';

beforeEach(function(done) {
  container.snapshot();

  restore({
    uri: 'mongodb://mongo:27017/backend-boilerplate-test',
    root: __dirname + '/dump/backend-boilerplate-test',
    drop: true,
    callback: function() {
      done();
    }
  });
});

afterEach(function() {
  container.restore();
});
