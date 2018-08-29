# Gupy Env

Environment variable loader using yml files.

## Installation

```bash
npm install gupy-io/gupy-env
```

## Usage

Declaring variables in a file (eg. .app.yml):

```yaml
DATABASE_HOST: '127.0.0.1'
DATABASE_PORT: '5432'

development:
  DATABASE_USER: 'user-dev'

test:
  DATABASE_USER: 'user-test'
```

Reading the file:

```javascript
const gupyEnv = require('gupy-env');

gupyEnv.load();

console.log(process.env.DATABASE_HOST)
console.log(process.env.DATABASE_PORT)
console.log(process.env.DATABASE_USER)
```

## Parameters

Optional configuration params:

| name | description | default value |
|---|---|---|
| path | path to yml file | .app.yml |
| encoding | encoding of yml file | utf8 |
| env | force environment section | development |

Usage:

```javascript
const gupyEnv = require('gupy-env');

gupyEnv.load({
  path: 'myapp.yml',
  encoding: 'iso-8859-1',
  env: 'staging'
);
```

