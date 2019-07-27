var React = require('react');

var Head = require('./components/head');
var Login = require('./components/formlogin');

class Home extends React.Component {
  render() {

    console.log("\nStarto")



    return (
      <html>
      <Head/>
      <body>
          <Login/>
      </body>
      </html>
      );
  }
}



module.exports = Home;