var React = require('react');

var Head = require('./components/head');
var Signup = require('./components/formsignup');

class Home extends React.Component {
  render() {

    console.log("\nStarto")



    return (
      <html>
      <Head/>
      <body>
        <Signup/>
      </body>
      </html>
      );
  }
}



module.exports = Home;