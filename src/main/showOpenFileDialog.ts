import {dialog} from "electron";

export function show_open_file_dialog(): Promise<any> {
  return new Promise((resolve, reject) => {
    const files = dialog.showOpenDialog({
      title: "open",
      properties: ["openFile"],
      filters: [{
        name: "csv file",
        extensions: ["csv"]
      }]
    });
    if (files && files.length > 0) {
      resolve(files[0]);
    } else {
      reject();
    }
  });
}

export default show_open_file_dialog;
