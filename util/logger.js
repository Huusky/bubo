var colors = require('colors');

module.exports = class logger {
  // Create static constructor so only one instance is created

  static log(message, type = 'log') {
    const date = `[${new Date().toLocaleTimeString()}]`;
    switch (type) {
      case 'log':
        return console.log(`${date} [LOG] ${message}`);
      case 'warn':
        return console.log(`${date} [WARN] ${message}`.yellow);
      case 'error':
        return console.log(`${date} [ERROR] ${message}`.red);
      case 'debug':
        return console.log(`${date} [DEBUG] ${message}`.green);
      default:
        return console.log(`${date} [${type}] ${message}`);
    }
  }
};
