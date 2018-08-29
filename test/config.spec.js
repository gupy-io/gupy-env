const { assert } = require('chai');
const { config } = require('../src/main');

describe('#config', () => {
  it('should throw error for invalid file path', () => {
    assert.throws(
      () => config({ path: '.invalid.yml' }),
      "Error: ENOENT: no such file or directory, open '.invalid.yml'",
    );
  });
});
