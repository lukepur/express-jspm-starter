/*
 *  This module simply exports all the route controllers under a single namespace
 */

var index = function(req, res) {
  res.render('index', {
    title: 'Express'
  });
};

module.exports = {
  index,
  api: {
    villains: require('./api/villains')
  }
};