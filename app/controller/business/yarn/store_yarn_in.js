'use strict';

const Controller = require('egg').Controller;

class StoreYarnInController extends Controller {
  async listMaster() {
    let offset = Number(this.ctx.query.offset) || 0;
    let limit = Number(this.ctx.query.limit) || 20;
    const result = await this.service.business.yarn.storeYarnIn.listMaster(offset, limit);
    this.ctx.body = {
      type: true,
      data: result
    };
  }

  async showWhole() {
    let id = this.ctx.params.id;
    const result = await this.service.business.yarn.storeYarnIn.showWhole(id);
    this.ctx.body = {
      type: true,
      data: result
    }
  }
}

module.exports = StoreYarnInController;
