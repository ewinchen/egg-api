'use strict';

module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();
    if (ctx.status === 404 && !ctx.body) {
      ctx.status = 404;
      ctx.body = { type: false, message: 'Not Found' };
    }
  };
};
