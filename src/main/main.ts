import {app} from 'electron';

import {createMainWindow, MainWindow} from "./createMainWindow";
import {createFileManager, FileManager} from "./createFileManager";

import {ipcMain} from "electron";
import {show_open_file_dialog} from "./showOpenFileDialog";

let mainWindow: MainWindow | null;
let fileManger: FileManager;

app.on('ready', () => {
  mainWindow = createMainWindow();
  fileManger = createFileManager();
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});


ipcMain.on("open-file-dialog", (event: Event) => {
  console.log("openFile");
  show_open_file_dialog();
});
