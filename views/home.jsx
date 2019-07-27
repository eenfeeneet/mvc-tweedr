var React = require('react');

var Head = require('./components/head');


class Home extends React.Component {
  render() {

    console.log("\nStarto")



    return (
      <html>
      <Head/>
      <body>
       <div className="container-fluid">

        </div>

      </body>
      </html>
      );
  }
}



module.exports = Home;