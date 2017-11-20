import {app, BrowserWindow} from 'electron';
import * as path from 'path';
import * as url from 'url';


export function createMainWindow () {
  return new MainWindow();
}


export class MainWindow {

  win: BrowserWindow | null;

  constructor() {
    this.win = new BrowserWindow({width: 800, height: 600});

    this.win.loadURL(url.format({
      pathname: path.join(__dirname, "..", "..", 'index.html'),
      protocol: 'file:',
      slashes: true
    }));

    // Open the DevTools.
    // win.webContents.openDevTools()

    this.win.on('closed', () => {
      this.win = null;
    });
  }
}
