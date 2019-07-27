var React = require("react");

class HomeHeaeder extends React.Component {
  render() {

    return (

            <div className="row justify-content-center align-items-center">
                <div className="col-3 mx-auto">
                    <img src="ro.png" className="mx-auto"/>
                    <h1 className="font-weight-bolder">TWEEDR</h1>

                    <a role="button" className="btn btn-lg btn-outline-secondary text-uppercase mx-2"  data-toggle="modal" data-target="#modalLogIn" href="">Log in</a>
                    <a role="button" className="btn btn-lg btn-outline-secondary text-uppercase mx-2" href="/tweedr">Enter</a>

                </div>
            </div>






    );
  }
}

module.exports = HomeHeaeder;