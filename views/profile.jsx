var React = require('react');

var Head = require('./components/head');
var Personal = require('./components/personalprofile');
var Content = require('./components/content');

class Home extends React.Component {
  render() {

    console.log("\nStarto")
    // console.log(this.props.user)



    return (
        <html>
        <Head/>
        <body>
            <div className="container-fluid">
                <div className="row">
                    <Personal user = {this.props.user}/>
                    <Content/>
                </div>
            </div>
      </body>
      </html>
      );
  }
}



module.exports = Home;