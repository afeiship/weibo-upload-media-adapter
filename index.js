var fs = require('fs');

module.exports = function(inFilename, inDefaultJson, inTab) {
  fs.writeFileSync(
    inFilename,
    JSON.stringify(inDefaultJson, null, inTab || 2)
  );
};
