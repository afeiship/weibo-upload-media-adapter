var fs = require('fs');

exports function (inRequire) {
  return function(inFilename, inDefault, inTab) {
    var tab = inTab || 2;
    var defaultJson = inDefault;
    if (typeof inDefault == 'string') {
      defaultJson = inRequire(inDefault);
    }

    fs.writeFileSync(
      inFilename,
      JSON.stringify(defaultJson, null, tab)
    );
  };
};
