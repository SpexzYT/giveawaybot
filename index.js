const Lynx = require('./Handlers/Client');
new Lynx().start(require('./config.json').token);