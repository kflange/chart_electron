import {app} from 'electron';

import {createMainWindow, MainWindow} from "./createMainWindow";

import {ipcMain} from "electron";
import {show_open_file_dialog} from "./showOpenFileDialog";

let mainWindow: MainWindow | null;


app.on('ready', () => {
  mainWindow = createMainWindow();
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
