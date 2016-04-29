function middlewareFactory(app) {
  return function(req, res, next) {
    res.locals.PROD = app.get('env') === 'production';
    res.locals.DEV = app.get('env') === 'development';
    next();
  }
}

module.exports = middlewareFactory;