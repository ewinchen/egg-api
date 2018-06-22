'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, DECIMAL } = app.Sequelize;

  const BizYarnBase = app.model.define('BizYarnBase', {
    YarnID: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    YarnNo: STRING(50),
    YarnName: STRING(50),
    YarnTypeID: STRING(50),
    YarnCount: STRING(50),
    YarnTwistLost: DECIMAL(18, 2),
    YarnNetLost: DECIMAL(18, 2),
    RecordStatus: BOOLEAN,
    OpName: STRING(50),
    OpDate: STRING(20),
    CommitStatus: BOOLEAN,
    CommitName: STRING(50),
    CommitDate: STRING(20),
  }, { tableName: 'TB_skYarnList', timestamps: false, freezeTableName: true });

  return BizYarnBase;
};
