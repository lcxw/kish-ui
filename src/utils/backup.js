import { exec } from "child_process";
import fs from "fs";
import path from "path";
import util from "util";
export default {
  async doBackup(
    host,
    userName,
    password,
    backupFolderPath,
    fileName,
    database
  ) {
    try {
      if (await !fs.existsSync(backupFolderPath)) {
        await fs.mkdirSync(backupFolderPath, err => {
          if (err && err.code != "EEXIST") throw "up";
          console.log(err);
        });
      }
      if (
        !backupFolderPath.endsWith(path.sep) &&
        !backupFolderPath.endsWith("/")
      ) {
        backupFolderPath = backupFolderPath + path.sep;
      }
      backupFolderPath = backupFolderPath + fileName;
      const cmd =
        "mysqldump --opt " +
        " --add-drop-database " +
        " --add-drop-table " +
        " -h" +
        host +
        " -u" +
        userName +
        " -p" +
        password +
        " --result-file=" +
        backupFolderPath +
        " --default-character-set=utf8 " +
        database;
      const res = await exec(
        cmd,
        {
          encoding: "utf-8"
        },
        (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        }
      );
      return res;
      // execSync.call().
    } catch (e) {
      return Promise.resolve({
        success: false,
        code: 500,
        message: "服务出错，请稍候重试"
      });
    }
  }
};
