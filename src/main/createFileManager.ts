import * as fs from "fs";


export function createFileManager() {
  return new FileManager();
}


export class FileManager {
  read_file(filepath: string): Promise<any> {
    return new Promise((resolve) => {
      const text = fs.readFileSync(filepath, "utf8");
      resolve(text);
    });
  }
}

export default createFileManager;
