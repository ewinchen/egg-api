'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list/:entity', controller.general.list);
  router.get('/show/:entity/:id', controller.general.show);
  router.post('/create/:entity', controller.general.create);
  router.get('/update', controller.general.update);
  router.get('/listby', controller.general.listBy);
  router.get('/showby', controller.general.showBy);
  router.get('/updateby', controller.general.updateBy);
  router.resources('user', '/user', controller.user);
  router.resources('rest', '/rest/:entity', controller.rest);

  router.get('/biz/yarn_in/list', controller.biz.yarnIn.list);
  router.get('/biz/yarn_in/show/:id', controller.biz.yarnIn.show);
  router.post('/biz/yarn_in/update/:id', controller.biz.yarnIn.update);
};
