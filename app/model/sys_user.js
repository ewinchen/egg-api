'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    login: STRING,
    name: STRING(30),
    password: STRING(32),
    age: INTEGER,
    last_sign_in_at: DATE,
    created_at: DATE,
    updated_at: DATE,
  }, { freezeTableName: true });

  User.findByLogin = async function(login) {
    return await this.findOne({
      where: {
        login: login
      }
    });
  };

  User.prototype.logSignin = function* () {
    yield this.update({ last_sign_in_at: new Date() });
  };

  return User;
};
