const fs = require('fs');
const yaml = require('js-yaml');

const defaultConfigPath = '.app.yml';
const defaultEncoding = 'utf8';
const defaultEnv = 'development';

/**
 * Parse object keys overrinding default keys with env keys
 * @param {Object} object - object to be parsed
 * @param {String} env - env section
 * @returns {Object} - object parsed
 */
const parse = (object, env) => {
  const parsedObject = {};

  Object.keys(object).forEach((key) => {
    if (typeof object[key] === 'object') {
      if (key === env) {
        Object.keys(object[key]).forEach((keyObject) => {
          parsedObject[keyObject] = object[key][keyObject];
        });
      }
    } else {
      parsedObject[key] = object[key];
    }
  });

  return parsedObject;
};

/**
 * Load yml file considering options configuration.
 * @param {Object} options - options for parse yml file
 * @param {String} [options.path=.app.yml] - path to yml file
 * @param {String} [options.encoding=utf8] - encoding of yml file
 * @param {String} [options.env=development] - enviroment section
 */
const load = (options = {}) => {
  const configPath = options.path ? options.path : defaultConfigPath;
  const encoding = options.encoding ? options.encoding : defaultEncoding;
  const env = process.env.NODE_ENV ? process.env.NODE_ENV : defaultEnv;

  try {
    const doc = yaml.safeLoad(fs.readFileSync(configPath, encoding));
    const parsedObject = parse(doc, env);

    Object.keys(parsedObject).forEach((key) => {
      if (!(key in process.env)) {
        process.env[key] = parsedObject[key];
      }
    });
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { parse, load };
