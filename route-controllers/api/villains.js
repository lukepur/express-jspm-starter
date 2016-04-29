var getVillains = function(req, res) {
  res.json([
    'Hannibal Lector',
    'Keyser Söze',
    'Darth Vader',
    'Adolf Hitler',
    'Ronald McDonald'
  ]);
};

module.exports = {
  getVillains
};