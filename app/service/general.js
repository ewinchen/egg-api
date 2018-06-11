'use strict';

const { Service } = require('egg');

class GeneralService extends Service {
  async list(entity, pageNum, pageSize, hasTotal) {

    const total = hasTotal ? (await this.app.mysql.query(`select count(*) from ${entity}`))[0]['count(*)'] : undefined;
    let data;
    if (pageSize === -1) {
      data = await this.app.mysql.select(entity, {
      });
    } else {
      data = await this.app.mysql.select(entity, {
        limit: pageSize,
        offset: pageSize * (pageNum - 1),
      });
    }
    return { total, data };
  }

  async show(entity, id) {
    return await this.app.mysql.get(entity, { [entity + '_id']: id });
  }

  async create(entity, data) {
    const result = await this.app.mysql.insert(entity, data);
    this.logger.debug(result);
    return result;
  }
}

module.exports = GeneralService;
