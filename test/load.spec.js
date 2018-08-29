const { assert } = require('chai');
const { load } = require('../src/main');

describe('#load', () => {
  it('should throw error for invalid file path', () => {
    assert.throws(
      () => load({ path: '.invalid.yml' }),
      "Error: ENOENT: no such file or directory, open '.invalid.yml'",
    );
  });
});
