const sryd = require('./components');

const req = require.context('./components', true, /^\.\/locale\/[A-Za-z]+_[A-Za-z]+\.tsx?$/);

sryd.locales = {};

req.keys().forEach((mod) => {
  const matches = mod.match(/\/([^/]+).tsx?$/);
  sryd.locales[matches[1]] = req(mod).default;
});

module.exports = sryd;
