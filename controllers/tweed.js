const sha256 = require('js-sha256');

module.exports = (db) => {
    /*
    * ===========================================
    * Controller logic
    * ===========================================
    */


    let indexCallback = (req, res) => {
        res.render('index');
    };
    let tweedrCallback = (req, res) => {
        res.render('home');
    };

    let registerCallback = (req, res) => {
        let newUser = req.body;
        console.log(newUser)
        res.render('home');

        // let hashedPass = sha256(newUser.password);

        // const queryString = `INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *`;
        // const values = [newUser.name, hashedPass];

        // db.data.register((error, newUser) =>{
        //     console.log('new user created!!')
        //     response.cookie('loggedin', hashedCookie)
        //     response.cookie('user_id', userID)
        //     response.render('home');

        // });

    };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexCallback,
    tweedr: tweedrCallback,
    register: registerCallback,

  };

}