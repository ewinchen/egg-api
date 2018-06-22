'use strict';

const Service = require('egg').Service;

class YarnInService extends Service {
  async list(offset, limit) {
    // const totalQuery = await this.ctx.model.BizYarnInMaster.findAll({
    //   attributes: [[this.ctx.model.fn('COUNT', this.ctx.model.col('*')), 'total']]
    // });
    // console.log(totalQuery[0].dataValues.total);
    return await this.ctx.model.BizYarnInMaster.findAndCount({ attributes: ['InMasterNo', 'InMasterID'], offset, limit });
  }

  async show(id) {
    // User.findAll({ include: [{ all: true, nested: true }]});
    return await this.ctx.model.BizYarnInMaster.findById(id, { include: [{ all: true, nested: true }] });
  }

  async update(id, recordTarget) {
    // 更新主表
    let recordSource = await this.ctx.model.BizYarnInMaster.findById(id, { include: [{ all: true, nested: true }] });
    await recordSource.update(recordTarget);
    // 插入从表
    const preInserts = recordTarget.BizYarnInDetails.filter(item => !item.InMasterID);
    preInserts.forEach(item => delete item.InDetailID);
    const inserteds = await Promise.all(preInserts.map(async preInsert => await this.ctx.model.BizYarnInDetail.create(preInsert)));
    // 更新从表
    const updateds = [];
    const preUpdates = recordTarget.BizYarnInDetails.filter(item => item.InMasterID);
    for (const preUpdate of preUpdates) {
      let updateSource = await this.ctx.model.BizYarnInDetail.findById(preUpdate.InDetailID);
      updateds.push(await updateSource.update(preUpdate));
    }
    // 删除

    // 更新外键
    await recordSource.setBizYarnInDetails([...inserteds, ...updateds]);
    return {};
  }
}

module.exports = YarnInService;
