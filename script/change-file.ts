import { writeFileSync } from "fs";
import axios from "axios";

async function writeAPI() {
  try {
    const res = await axios.get(
      "http://192.168.3.48:8088/v3/api-docs?group=%E7%B3%BB%E7%BB%9F%E6%9C%8D%E5%8A%A1"
    );

    const res2 = JSON.stringify(res.data).replace(/\«|»|\s+/g, "_");

    const apiObj = JSON.parse(res2);

    for (const key in apiObj.paths) {
      const path = key.split("/").map((item: string, i: number) => {
        if(item&&i>1){
            return `${item[0].toUpperCase()}${item.slice(1)}`;
        }        
        return item;
      }).join('');
      const method = Object.keys(apiObj.paths[key])[0];

      apiObj.paths[key][method].operationId = `${path}${method.toUpperCase()}`;
    }

    writeFileSync("./json/api.json", JSON.stringify(apiObj));
  } catch (error) {
    console.log("出错了");
  }
}

writeAPI();
