var fs = require('fs');

exports.jsonInit = function(inFilename, inDefault, inTab) {
  var tab = inTab || 2;
  var defaultJson = inDefault;
  if (typeof inDefault == 'string') {
    defaultJson = require(inDefault);
  }

  fs.writeFileSync(
    path.join(inFilename),
    JSON.stringify(defaultJson, null, tab)
  );
};
