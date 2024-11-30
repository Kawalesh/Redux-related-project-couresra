// babel.config.js

module.exports = {
    presets: [
      'react-app', // if you are using create-react-app
      // or you can use other presets depending on your setup
    ],
    plugins: [
      '@babel/plugin-proposal-private-methods', 
      '@babel/plugin-proposal-private-property-in-object' // Add this plugin
    ]
  };