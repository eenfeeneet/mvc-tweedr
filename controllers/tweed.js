module.exports = (db) => {
    /*
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let indexControllerCallback = (request, response) => {
          db.pokemon.getAll((error, allPokemon) => {
            response.render('pokemon/index', { allPokemon });
          });
    };


    let indexCallback = (request, response) => {

        response.render('index');
    };

    let loginCallback = (request, response) => {

        response.render('login');
    };
    let signupCallback = (request, response) => {

        response.render('signup');
    };
    let tweedrCallback = (request, response) => {

        response.render('home');
    };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexCallback,
    login: loginCallback,
    signup: signupCallback,
    tweedr: tweedrCallback,

  };

}