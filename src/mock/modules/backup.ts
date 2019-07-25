import Mock from "mockjs";
import path from "path";
import spawn from "child_process";
import doBackup from "../../utils/backup";
export function backup() {
  // const captcha_code = Mock.Random.string(4);
  const captcha_code = Mock.mock({ regexp: /\w{4}/ }).regexp;
  const backupFodlerName = "backup_" + new Date().toLocaleString();
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
    url: "backup",
    type: "get",
    data: logoutData
  };
}
export function backup_Folder(backupFodlerName) {
  const host = "";
  const username = "";
  const password = "";
  const database = "";
  const backupFolderPath = "${home}" + backupFodlerName + path.sep;
  const fileName = "kitty.sql";
  doBackup(host, username, password, database, backupFolderPath, fileName);
  return new Promise(() => {
    console.log(`child process exited with code `);
    return "s";
  })
    .then(res => {})
    .catch(err => {});
}
