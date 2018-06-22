'use strict';

// const BizYarnBase = require('./biz_yarn_base');

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, DECIMAL } = app.Sequelize;

  const BizYarnInDetail = app.model.define('BizYarnInDetail', {
    InDetailID: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    InMasterID: INTEGER,
    YarnID: INTEGER,
    ProviderID: INTEGER,
    Brand: STRING(50),
    BatchNo: STRING(50),
    ColorName: STRING(50),
    Roll: DECIMAL(18, 2),
    RollQty: DECIMAL(18, 2),
    DisRoll: DECIMAL(18, 2),
    DisRollQty: DECIMAL(18, 2),
    Qty: DECIMAL(18, 2),
    Price: DECIMAL(18, 2),
    Amount: DECIMAL(18, 2),
    Remark: STRING(200),
    SelectStatus: BOOLEAN,
    StoreStationName: STRING(50),
  }, { tableName: 'TD_skStoreYarnInDetail', timestamps: false, freezeTableName: true });

  BizYarnInDetail.associate = function() {
    app.model.BizYarnInDetail.belongsTo(app.model.BizYarnBase, { foreignKey: 'YarnID' });
    app.model.BizYarnInDetail.belongsTo(app.model.BizYarnInMaster, { foreignKey: 'InMasterID', targetKey: 'InMasterID' });
    app.model.BizYarnInMaster.hasMany(app.model.BizYarnInDetail, { foreignKey: 'InMasterID', sourceKey: 'InMasterID' });
  };
  // BizYarnInDetail.belongsTo(app.model.BizYarnBase, { foreignKey: 'YarnID' });

  // app.model.sync();

  return BizYarnInDetail;
};
