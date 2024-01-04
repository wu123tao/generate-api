import { existsSync, mkdirSync, writeFileSync } from "fs";
import axios from "axios";

async function writeAPI() {
  if(existsSync('./api')&&!existsSync('./api/.openapi-generator-ignore')){
    writeFileSync('./api/.openapi-generator-ignore', `
      common.ts
      configuration.ts
      git_push.sh
      .npmignore
      .gitignore
    `)
  }
  if(!existsSync('./api')&&!existsSync('./api/.openapi-generator-ignore')){
    mkdirSync('./api')
    writeFileSync('./api/.openapi-generator-ignore', `
      common.ts
      configuration.ts
      git_push.sh
      .npmignore
      .gitignore
    `)
  }

  try {
    const res = await axios.get(
      "http://192.168.3.77:8887/v3/api-docs?group=%E7%B3%BB%E7%BB%9F%E6%9C%8D%E5%8A%A1"
    );

    const res2 = JSON.stringify(res.data).replace(/\«|»|\s+/g, "_");

    const apiObj = JSON.parse(res2);

    for (const key in apiObj.paths) {
      const funName = key
        .split("/")
        .filter((item) => item && item !== "api" && item !== "v1")
        .map((item, index) => {
          if (index === 0) {
            return item;
          } else {
            return `${item[0].toUpperCase()}${item.slice(1)}`;
          }
        })
        .join("");

      const method = Object.keys(apiObj.paths[key])[0];

      apiObj.paths[key][method].operationId = `${funName}${method.toUpperCase()}`;
    }

    writeFileSync("./json/api.json", JSON.stringify(apiObj));
  } catch (error) {
    console.log("出错了");
  }
}

writeAPI();
