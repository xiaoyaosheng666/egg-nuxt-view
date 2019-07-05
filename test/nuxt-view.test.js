'use strict';

const mock = require('egg-mock');

describe('test/nuxt-view.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/nuxt-view-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nuxtView')
      .expect(200);
  });
});
