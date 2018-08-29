const { expect } = require('chai');
const { parse } = require('../src/main');

describe('#parse', () => {
  it('should override default variables by env variables', () => {
    const object = {
      DATABASE_HOST: '127.0.0.1',
      DATABASE_USER: 'root',
      test: {
        DATABASE_USER: 'test-user',
      },
      development: {
        DATABASE_USER: 'dev-user',
      },
    };
    const env = 'development';

    expect(parse(object, env)).to.deep.eq({
      DATABASE_HOST: '127.0.0.1',
      DATABASE_USER: 'dev-user',
    });
  });
});
