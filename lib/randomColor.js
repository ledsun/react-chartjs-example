const randomColorFactor = require('./randomColorFactor')

module.exports = function(opacity) {
  return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')'
}
