import { Storage as storage } from "@capacitor/storage";
class Storage {
  async set(key = "", value = "") {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    return await storage.set({
      key,
      value,
    });
  }
  async get(key = "") {
    function isJSON(str: string) {
      if (typeof str == "string") {
        try {
          const obj = JSON.parse(str);
          if (typeof obj == "object" && obj) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          console.log("error：" + str + "!!!" + e);
          return false;
        }
      }
    }
    try {
      const { value } = await storage.get({ key });
      const isObj = isJSON(value as string);
      if (isObj) return JSON.parse(value as string);
      return value;
    } catch (error) {
      console.log(error);
    }
  }
  async remove(key = "") {
    return await storage.remove({ key });
  }
  async clear() {
    return await storage.clear();
  }
}

export default new Storage();
