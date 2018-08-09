# UPnP Tool

## Features 
- UPnP device discovery on local network
- Display device info, services, and actions
- See action arguments

## Setup
```
1. Clone this repository
2. cd to local repo
3. yarn install
4. yarn start
```
To build:
```
yarn build
```

## In progress
- Send actions (90% completed)
- Display action argument type by passing down related state variable
- Add animations to reload devices and send action

## Known Issues
- Program crashes on startup if no devices are found
- Attempting to reload devices before the previous reload finishes causes issues

## Built With
- Electron
- React
- [Electron + React Boilerplate](https://github.com/kitze/react-electron-example)
