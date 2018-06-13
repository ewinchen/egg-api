'use strict';

const Service = require('egg').Service;

class StoreYarnInService extends Service {
  async listMaster() {
    return await this.ctx.model.StoreYarnInMaster.findAll({ attributes: ['InMasterNo', 'InMasterID'] });
  }

  async showWhole(id) {
    const master = await this.ctx.model.StoreYarnInMaster.findById(id);
    const details = await this.ctx.model.StoreYarnInDetail.findAll({ where: { InMasterID: id } });
    return { master, details };
  }
}

module.exports = StoreYarnInService;
