# Register NPM


# Creating a React Component Library: From Directory Setup to npm Publish



## 1. Create a New Directory and Initialize npm

- mkdir rlf-component-library
- cd rlf-component-library
- npm init -y

## Set Up Your Project Structure
### Create src Directory
 - mkdir src

### Create components Directory Inside src
- mkdir src/components

### Create index.js File Inside src
- touch src/index.js



## Installation of Dependencies
### Install Required Packages

- npm install react react-dom   
- npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader   
- npm install --save-dev webpack webpack-cli   
- npm install --save-dev style-loader css-loader
- npm install --save-dev prop-types


## Configure Babel
### Create a .babelrc file in your project root to configure Babel presets:

- {"presets": ["@babel/preset-env", "@babel/preset-react"]}


## Configure webpack 
### Create a webpack.config.js file to configure webpack for bundling your library:

- webpack.config.js
- const path = require('path');

- module.exports = {
- mode: 'production',
- entry: './src/index.js',
- output: {
-    path: path.resolve(__dirname, 'dist'),
-    filename: 'bundle.js',
-    libraryTarget: 'commonjs2',
-  },
-  module: {
-    rules: [
-      {
-       test: /\.(js|jsx)$/,
-        exclude: /node_modules/,
-        use: ['babel-loader'],
-      },
-      {
-        test: /\.css$/,
-        use: ['style-loader', 'css-loader'],
-      },
-    ],
-  },
-  resolve: {
-    extensions: ['.js', '.jsx'],
-  },
- };


### Create Button Component Directory Inside src/components
- mkdir src/components/Button

### Create Button.js File Inside src/components/Button
-touch src/components/Button/Button.js

### Create Button.css File Inside src/components/Button
-touch src/components/Button/Button.css

## Implement Your React Components
### Example Implementation of Button.js
- src/components/Button/Button.js
- import React from 'react';
- import './Button.css';

- const Button = ({ text, onClick }) => {
- return (
-    <button className="button" onClick={onClick}>
-      {text}
-    </button>
-  );
- };

- export default Button;

  ### Example Implementation of Button.css
  - .button {
  -  background-color: #007bff;
  -  color: white;
  -  border: none;
  -  padding: 10px 20px;
  -  }
 
  

## Entry Point for Your Library
### Example Implementation of index.js

- src/index.js
- export { default as Button } from './components/Button/Button';
- Export other components here if needed


## Build Your Library
### Add scripts to package.json for building your library:
- {
-  "scripts": {
-    "build": "webpack"
-  }
- }

##Publishing to npm
### Register and Publish to npm

-Ensure you are logged in with your npm account:

- npm login
- npm notice Log in on https://registry.npmjs.org/
- Username: < npm user name >
- Password:                                                                                                                                                                               
- Email: (this IS public) email                                                                                                                                         
- npm notice Please check your email for a one-time password (OTP)
- Enter one-time password: 93940394
- Logged in as username on https://registry.npmjs.org/.
- PS D:\RLF> npm run build
- webpack 5.92.1 compiled successfully in 1326 ms


### Then, publish your library:
- npm publish --access public








