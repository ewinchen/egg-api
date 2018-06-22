'use strict';

module.exports = app => {
  if (app.config.env === 'local') {
    app.beforeStart(async () => {
      // sequelize.sync()
      await app.model.sync();
    });
  }
};