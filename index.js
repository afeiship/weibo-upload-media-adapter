var fs = require('fs');

module.exports = function(inFilename, inDefault, inTab) {
  var tab = inTab || 2;
  var defaultJson = inDefault;
  if (typeof inDefault == 'string') {
    defaultJson = require(inDefault);
  }

  fs.writeFileSync(
    inFilename,
    JSON.stringify(defaultJson, null, tab)
  );
};
