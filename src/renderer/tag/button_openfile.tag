button-open-file
  button(class="btn" onclick="{ clickOpenFileButton }") open

  script.
    import {ipcRenderer} from "electron";

    clickOpenFileButton() {
      console.log("clicked");
      ipcRenderer.send("open-file-dialog");
    }
