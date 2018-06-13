'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, DECIMAL } = app.Sequelize;

  const StoreYarnInDetail = app.model.define('TD_skStoreYarnInDetail', {
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
  }, { timestamps: false, freezeTableName: true });

  return StoreYarnInDetail;
};
