'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.env = process.env.EGG_ENV || 'local';

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528688407934_740';

  // add your config here
  config.middleware = [ 'notFoundHandler' ];

  config.onerror = {
    all(err, ctx) {
      if (err.code === 'ER_NO_SUCH_TABLE' || err.code === 'ER_CLIENT') {
        ctx.status = 400;
        ctx.body = {
          type: false,
          message: err.message || err,
        };
        return;
      }
      ctx.body = {
        type: false,
        message: config.env === 'prod' ? 'Internal Server Error' : err.message || err
      };

      ctx.status = 500;
    },
  };

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3311',
      user: 'root',
      password: 'root',
      database: 'sakila',
    },
    app: true,
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false
    }
  };

  config.sequelize = {
    dialect: 'mssql', // support: mysql, mariadb, postgres, mssql
    database: 'XSERP',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: 'sa',
  };

  config.cors = {
    origin: '*'
  };

  return config;
};
