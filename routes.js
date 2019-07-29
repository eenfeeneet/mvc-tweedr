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

  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);




    app.get('/', tweedrControllerCallbacks.index);
    app.get('/tweedr/', tweedrControllerCallbacks.public);

    app.post('/tweedr/register', tweedrControllerCallbacks.register);
    app.post('/tweedr/login', tweedrControllerCallbacks.personal);
    app.get('/tweedr/:user', tweedrControllerCallbacks.profile);




};