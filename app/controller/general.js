'use strict';

const { Controller } = require('egg');

class GeneralController extends Controller {
  async list() {
    let entity = this.ctx.params.entity;
    let pageNum = this.ctx.query.pageNum || 1;
    let pageSize = this.ctx.query.pageSize || 20;
    let hasTotal = Number(this.ctx.query.hasTotal) === 1;
    pageNum = Number(pageNum);
    pageSize = Number(pageSize);

    if (!Number.isInteger(pageNum) || !Number.isInteger(pageSize) || pageSize < -1 || pageSize === 0) {
      let err = new Error('Invalid Page Arguments');
      err.code = 'ER_CLIENT';
      throw err;
    }

    const result = await this.service.general.list(entity, pageNum, pageSize, hasTotal);
    this.ctx.body = {
      type: true,
      ...result,
    };
  }

  async show() {
    let entity = this.ctx.params.entity;
    let id = this.ctx.params.id;

    let data = await this.service.general.show(entity, id);
    if (data) {
      this.ctx.body = {
        type: true,
        data,
      };
    } else {
      this.ctx.status = 404;
      this.ctx.body = {
        type: false,
        message: 'Data Not Found'
      };
    }
  }

  async create() {
    let entity = this.ctx.params.entity;
    let data = this.ctx.request.body;
    let result = await this.service.general.create(entity, data);
    this.ctx.body = {
      type: true,
      data: result
    };
  }

  async update() {
    this.ctx.body = 'hi, egg';
  }
  async listBy() {
    this.ctx.body = 'hi, egg';
  }
  async showBy() {
    this.ctx.body = 'hi, egg';
  }
  async updateBy() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = GeneralController;
