module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const pokemonControllerCallbacks = require('./controllers/tweed')(allModels);
  const tweedrControllerCallbacks = require('./controllers/tweed')(allModels);




    app.get('/', tweedrControllerCallbacks.index);
    app.get('/tweedr', tweedrControllerCallbacks.tweedr);
    app.get('/tweedr/login', tweedrControllerCallbacks.login);
    app.get('/tweedr/signup', tweedrControllerCallbacks.signup);




};