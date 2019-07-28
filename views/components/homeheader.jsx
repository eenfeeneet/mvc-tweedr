var React = require("react");

class HomeHeaeder extends React.Component {
  render() {

    return (

            <div className="row justify-content-center">
                <div className="col-md-3 text-center ">
                    <img src="ro.png" className="mx-auto d-block"/>
                    <h1 className="font-weight-bolder">TWEEDR</h1>

                    <a role="button" className="btn btn-lg btn-success text-uppercase my-2 mx-2"  data-toggle="modal" data-target="#modalLogIn" href="">Log in</a>
                    <a role="button" className="btn btn-lg btn-success text-uppercase my-2 mx-2" href="/tweedr">Enter</a>

                </div>
            </div>






    );
  }
}

module.exports = HomeHeaeder;