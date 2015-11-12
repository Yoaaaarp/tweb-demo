var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'test-express-mvc'
    },
    port: 3000,
    db: 'mongodb://localhost/test-express-mvc-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'test-express-mvc'
    },
    port: 3000,
    db: 'mongodb://localhost/test-express-mvc-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'test-express-mvc'
    },
    port: 3000,
    db: 'mongodb://localhost/test-express-mvc-production'
  }
};

module.exports = config[env];
