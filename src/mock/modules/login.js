/*
 * 系统登录模块
 */

// 登录接口
import Mock from "mockjs";

export function login() {
  const loginData = {
    code: 200,
    msg: null,
    data: {
      id: null,
      userId: 1,
      token: "77ae89be36504adfb5c09ef71409ea0e",
      expireTime: "2018-09-01T16:24:50.473+0000",
      createBy: null,
      createTime: null,
      lastUpdateBy: null,
      lastUpdateTime: "2018-09-01T04:24:50.473+0000"
    }
  };
  return {
    url: "login",
    type: "post",
    data: loginData
  };
}

// 登出接口
export function logout() {
  const logoutData = {
    code: 200,
    msg: null,
    data: {}
  };
  return {
    url: "logout",
    type: "get",
    data: logoutData
  };
}

export function captcha() {
  // const captcha_code = Mock.Random.string(4);
  const captcha_code = Mock.mock({ regexp: /\w{4}/ }).regexp;
  console.log(captcha_code);
  const logoutData = {
    code: 200,
    msg: null,
    data: {
      // captcha: Mock.Random.string("abcdefghijklmnopqrstuvwxyz", 4, 7),
      // captcha: Mock.mock("@cname"),
      // captcha_code: Mock.Random.string(4),
      // img: Mock.Random.dataImage("200x100", captcha),
      captcha_code: captcha_code,
      // img: Mock.Random.image("143x38", "#894FC4", "#FFF", "png", captcha_code)
      // img: Mock.Random.image("143x38", captcha_code)
      // img: Mock.Random.dataImage("143x38", captcha_code)
      img: Mock.Random.dataImage("143x38", captcha_code)
    }
  };
  return {
    // url: RegExp("captcha.jpg"),
    url: "captcha",
    type: "get",
    data: logoutData
  };
}
