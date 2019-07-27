var React = require('react');

var Head = require('./components/head');
var HomeHeader = require('./components/homeheader');
var Modal = require('./components/modal');



class Home extends React.Component {
  render() {

    console.log("\nStarto")



    return (
      <html>
      <Head/>
      <body>
        <div className="container-fluid">
            <HomeHeader/>
            <Modal/>
        </div>
      </body>
      </html>
      );
  }
}



module.exports = Home;