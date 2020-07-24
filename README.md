# Warbler Single Page Website

This is a Single Page Website where users can sign up and sign in to view all messages and create/delete their own messages. This frontend is designed to work with [NodeJS-based Backend](https://github.com/yiping-lai/warbler-server). The ```src``` folder contains the interface between the frontend and backend. 

## About the Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The tech stack includes HTML, CSS, Bootstrap3, React, and Redux.

### Project Structure

  ```sh
  ├── README.md
  ├── index.js 
  ├── package.json *** The dependencies we need to install "npm start"
  ├── static.json *** Set up landig html and proxy to backend 
  ├── src
  │   ├── store *** Redux related documents
  │   │   ├── actions
  │   │   ├── reducers
  │   │   ├── actionTypes.js
  │   │   └── index.js
  │   ├── containers *** Components that handle application data
  │   ├── components *** Componets that present application data
  │   ├── hocs *** higher order components 
  │   ├── serices *** interface with backend api
  │   ├── images
  │   └── index.js *** the main driver of the app. 
  ├── public
  └── node_modules
  ```

## Getting started

### Installing Dependencies

#### Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

#### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the `frontend` directory of this repository. After cloning, open your terminal and run:

```bash
npm install
```

## Running Your Frontend 

The frontend app was built using create-react-app. In order to run the app in development mode use ```npm start```. You can edit the script in the ```static.json``` to set proxy to the correct backend port. 

```bash
npm start
```
