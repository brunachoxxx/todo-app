import fs from "fs";

const file = "./db/data.json";

export function saveFile(data) {
  fs.writeFileSync(file, JSON.stringify(data));
}
export function loadFile() {
  if (!fs.existsSync(file)) {
    null;
  }
  const info = fs.readFileSync(file, { encoding: "utf-8" });
  const data = JSON.parse(info);

  return data;
}
