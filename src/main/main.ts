import {app} from 'electron';

import {createMainWindow, MainWindow} from "./createMainWindow";
import {createFileManager, FileManager} from "./createFileManager";

import {ipcMain} from "electron";
import {show_open_file_dialog} from "./showOpenFileDialog";

let mainWindow: MainWindow | null;
let fileManager: FileManager;

app.on('ready', () => {
  mainWindow = createMainWindow();
  fileManager = createFileManager();
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
  show_open_file_dialog()
    .then((filepath: string) => {return fileManager.read_file(filepath)})
    .then((text: string) => {console.log(text)})
    //.then((text: string) => {mainWindow.sendText(text)})
    .catch((error) => {console.log(error)});
});
