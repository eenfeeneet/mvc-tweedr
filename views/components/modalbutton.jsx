var React = require("react");

class Modal extends React.Component {
  render() {

    return (

            <div>
                <button type="button" className="btn btn-primary" data-toggle="modallogin" data-target="#exampleModalCenter">
                Launch demo modal
                </button>
            </div>



    );
  }
}

module.exports = Modal;