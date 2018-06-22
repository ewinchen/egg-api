'use strict';

const Controller = require('egg').Controller;

class YarnInController extends Controller {
  async list() {
    let offset = Number(this.ctx.query.offset) || 0;
    let limit = Number(this.ctx.query.limit) || 20;
    const result = await this.service.biz.yarnIn.list(offset, limit);
    this.ctx.body = {
      type: true,
      count: result.count,
      data: result.rows
    };
  }

  async show() {
    let id = this.ctx.params.id;
    const result = await this.service.biz.yarnIn.show(id);
    this.ctx.body = {
      type: true,
      data: result
    };
  }

  async update() {
    let id = this.ctx.params.id;
    let body = this.ctx.request.body;
    const result = await this.service.biz.yarnIn.update(id, body);
    this.ctx.body = {
      type: true,
      data: result
    }
  }
}

module.exports = YarnInController;
