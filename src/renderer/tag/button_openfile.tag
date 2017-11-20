<button-open-file>
  <button class="btn" onclick={ clickOpenFileButton }>open</button>

  <script>
    import {ipcRenderer} from "electron";

    clickOpenFileButton() {
      console.log("clicked");
      ipcRenderer.send("open-file-dialog");
    }
  </script>
</button-open-file>
