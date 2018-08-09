const { electron, app, BrowserWindow, ipcMain } = require("electron");

const deviceInfo = require("../resources/deviceInfo");

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680 });
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

// IPC's
/*
ipcMain.on("getDevices", async (event, arg) => {
    try {
        let info = await deviceInfo.getDeviceInfo();
        if (info.length > 0) {
            event.sender.send("devices", info);
        } else {
            event.sender.send("devices", {
                Name: "No devices found",
                UDN: "Error",
                URL: "Error"
            });
        }
    } catch (e) {
        console.log(e);
    }
});

ipcMain.on("getServiceList", async (event, arg) => {
    try {
        let services = await deviceInfo.getDeviceServices(arg);
        event.sender.send("services", services);
    } catch (e) {
        console.log("getservicelisterorr");
        console.log(e);
    }
});
*/
