const {ipcRenderer, contextBridge} = require("electron")

contextBridge.exposeInMainWorld("api", {
    Login: (user)=> ipcRenderer.invoke("login", user)
})