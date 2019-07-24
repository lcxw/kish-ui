const Koa = require("koa");
const app = new Koa();
const fs = require("fs");
const Router = require("koa-router");
let home = new Router();
home.get("/", async ctx => {
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `;
  ctx.body = html;
});
let router = new Router();
router.use("/", home.routes(), home.allowedMethods());
router.use("/", home.routes(), home.allowedMethods());
