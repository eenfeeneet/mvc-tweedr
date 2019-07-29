var React = require('react');

var Head = require('./components/head');

var Content = require('./components/content');

class Home extends React.Component {
  render() {

    console.log("\nStarto")



    return (
        <html>
        <Head/>
        <body>
            <div className="container-fluid">
                <div className="row">
                    <Content/>
                </div>
            </div>
      </body>
      </html>
      );
  }
}



module.exports = Home;