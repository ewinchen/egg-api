const { Controller } = require('egg');
const camelCase = require('camelcase');

class RestController extends Controller {
  /**
   * method: GET
   * path: /rest/:entity
   */
  async index() {
    let entity = this.ctx.params.entity;
    entity = camelCase(entity, { pascalCase: true });
    const result = await this.ctx.model[entity].findAll();
    this.ctx.body = result;
  }
  /**
   * method: GET
   * path: /rest/:entity/:id
   */
  async show() {
    let entity = this.ctx.params.entity;
    entity = camelCase(entity, { pascalCase: true });
    let id = this.ctx.params.id;
    const result = await this.ctx.model[entity].findById(id);
    this.ctx.body = result;
  }
  /**
   * method: POST
   * path: /rest/:entity
   */
  async create() {
    let entity = this.ctx.params.entity;
    entity = camelCase(entity, { pascalCase: true });
    let body = this.ctx.request.body;
    const result = await this.ctx.model[entity].create(body);
    this.ctx.body = result;
  }
  /**
   * method: PUT
   * path: /rest/:entity/:id
   */
  async update() {
    let entity = this.ctx.params.entity;
    entity = camelCase(entity, { pascalCase: true });
    let id = this.ctx.params.id;
    let body = this.ctx.request.body;
    const result = await this.ctx.model[entity].update(body, { where: { [this.ctx.model[entity].primaryKeyField]: id } });
    this.ctx.body = result;
  }
  /**
   * method: DELETE
   * path: /general/:entity/:id
   */
  async destroy() { 
    let entity = this.ctx.params.entity;
    entity = camelCase(entity, { pascalCase: true });
    let id = this.ctx.params.id;
    const result = await this.ctx.model[entity].destroy({ where: { [this.ctx.model[entity].primaryKeyField]: id } });
    this.ctx.body = result;
  }

}

module.exports = RestController;
