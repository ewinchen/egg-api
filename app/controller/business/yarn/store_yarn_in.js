'use strict';

const Controller = require('egg').Controller;

class StoreYarnInController extends Controller {
  async listMaster() {
    const result = await this.service.business.yarn.storeYarnIn.listMaster();
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
