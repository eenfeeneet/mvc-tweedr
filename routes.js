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

  const tweedrControllerCallbacks = require('./controllers/tweed')(allModels);




    app.get('/', tweedrControllerCallbacks.index);
    app.get('/tweedr/', tweedrControllerCallbacks.tweedr);

    app.post('/tweedr/register', tweedrControllerCallbacks.register);





};