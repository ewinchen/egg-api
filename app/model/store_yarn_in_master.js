'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, DECIMAL } = app.Sequelize;

  const StoreYarnInMaster = app.model.define('TD_skStoreYarnInMaster', {
    InMasterID: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    InMasterNo: STRING(50),
    CredenceNo: STRING(50),
    InDate: STRING(25),
    InTypeID: INTEGER,
    StoreNameID: INTEGER,
    OwnerID: INTEGER,
    CustomerID: INTEGER,
    ProductOrderMasterID: INTEGER,
    WareHouseID: INTEGER,
    SumAmount: DECIMAL(18, 2),
    HasPayAmount: DECIMAL(18, 2),
    NotPayAmount: DECIMAL(18, 2),
    Remark: STRING(500),
    RecordStatus: BOOLEAN,
    OpName: STRING(50),
    OpDate: DATE,
    CommitName: STRING(50),
    CommitDate: DATE,
    CommitStatus: BOOLEAN,
    PrintStatus: BOOLEAN,
    PrintName: STRING(50),
    PrintDate: DATE,
    CompleteStatus: BOOLEAN,
    CompleteName: STRING(50),
    CompleteDate: DATE,
    FirstCommitStatus: BOOLEAN,
    FirstCommitName: STRING(50),
    FirstCommitDate: DATE,
    FirstBillDate: DATE,
    FromStoreNameID: INTEGER,
    FromOwnerID: INTEGER,
    SourceMasterID: INTEGER,
    OtherAmount: DECIMAL(18, 2),
    DiscountAmount: DECIMAL(18, 2),
    AROrderNo: STRING(50),
    SyncOrderNo: STRING(50),
    SelectStatus: BOOLEAN,
    SumQty: DECIMAL(18, 2)
  }, { timestamps: false, freezeTableName: true });

  return StoreYarnInMaster;
};
