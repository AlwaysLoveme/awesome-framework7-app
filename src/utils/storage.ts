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
    const { value } = await storage.get({ key });
    return JSON.parse(value as string);
  }
  async remove(key = "") {
    return await storage.remove({ key });
  }
  async clear() {
    return await storage.clear();
  }
}

export default new Storage();
