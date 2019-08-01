
# React Starter Template with WebPack 4
**Boiler Plate Template for React Apps**

Generated from scracth by importing all dependencies and plugins.

Uses WebPack 4 (zero configuration)

The concept of zero configuration in webpack 4 applies only to:

    1. The entry point. No need to specify entry point, default is ./src/index.js
    2. The output. No need to specify output, default to ./dist/main.js
    3. Production and development mode (no need to create 2 separate confs for production and development)
    
    Babel config has been changed to babel.config.js
     Latest babel dependencies to be installed:
     1. @babel/core
     2. @babel/preset-env
     3. @babel/preset-react
     
     
Dev and Build modules mentioned in package.json for dev and production build. No need for 2 separate configs for env.
     
**Plugin**

html-webpack-plugin for processing HTML

**Loaders**
Babel: babel-loader

Linting: eslint-loader

CSS: css-loader, style-loader, postcss-loader, autoprefixer

Image: file-loader

URL: url-loader


**Builds**

npm run dev (dev build)

npm run build (production build)

npm start (using webpack server)
