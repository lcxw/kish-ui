import Mock from "mockjs";
import { baseUrl } from "@/utils/global";
import * as login from "./modules/login";
// const baseUrl = "http://localhost:8001";
const openMock = true;
// 设置接口返回时间,在100-1500毫秒中随机
Mock.setup({
  timeout: "100-1500"
});
fnCreate(login, openMock);
/**
 * 创建mock模拟数据
 * @param {*} mod 模块
 * @param {*} isOpen 是否开启?
 */
function fnCreate(mod, isOpen = true) {
  if (isOpen) {
    for (var key in mod) {
      (res => {
        if (res.isOpen !== false) {
          let url = baseUrl;
          if (!url.endsWith("/")) {
            url = url + "/";
          }
          url = url + res.url;
          Mock.mock(new RegExp(url), res.type, opts => {
            opts["data"] = opts.body ? JSON.parse(opts.body) : null;
            delete opts.body;
            console.log("\n");
            console.log("%cmock拦截, 请求: ", "color:blue", opts);
            console.log("%cmock拦截, 响应: ", "color:blue", res.data);
            return res.data;
          });
        }
      })(mod[key]() || {});
    }
  }
}

Mock.mock("http://www.test.com", {
  "userInfo|4": [
    {
      //生成|num个如下格式名字的数据
      "id|+1": 1, //数字从当前数开始后续依次加一
      name: "@cname", //名字为随机中文名字
      "age|18-28": 25, //年龄为18-28之间的随机数字
      "sex|1": ["男", "女"], //性别是数组中的一个，随机的
      "job|1": ["web", "UI", "python", "php"] //工作是数组中的一个
    }
  ]
});
Mock.mock("http://www.test.com/img", {
  // 先获取一个随机时间的毫秒数，再去掉毫秒
  // timestamp: Mock.Random.Data('T')/1000,
  // "ListInfo|1": [
  //   {
  // img: Mock.Random.image("200x100", "#ffcc33", "#FFF", "png", Mock.Random.string())
  img: Mock.Random.dataImage("200x100", Mock.Random.string())
  // }
  // ]
});
Mock.mock("http://kitty:8001/captcha.jpg", {
  // "ListInfo|1": [
  //   {
  // img: Mock.Random.image("200x100", "#ffcc33", "#FFF", "png", Mock.Random.string())
  img: Mock.Random.dataImage("200x100", Mock.Random.string())
  // }
  // ]
});
Mock.mock(/query/g, function(option) {
  //拦截query请求
  return Mock.mock({
    // imgUrl: Mock.Random.dataImage('240x360', Mock.mock({'regexp': /\w{4}/}).regexp)
    // imgUrl: Mock.Random.dataImage('240x360', Mock.Random.paragraph( 3, 7 ))
    imgUrl: Mock.Random.dataImage("240x360", Mock.Random.string())
  });
});
