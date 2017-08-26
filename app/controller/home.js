'use strict';

const fs = require('fs')
const path = require('path')

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      // this.ctx.body = 'hi, egg';
      const { ctx } = this
      ctx.set('Content-Type', 'text/html')
      ctx.body = fs.createReadStream(path.join('app/public/test.html'))
    }
  }
  return HomeController;
};
