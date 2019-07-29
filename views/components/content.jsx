var React = require('react');

class Content extends React.Component {
  render() {
    console.log("<NavSide> Added")
    return (
        <div className="col-md-8 mx-auto">
            <div className="card border-success h-100 align-items-stretch">
                <div className="card-header">Tweed Feed</div>
                <div className="card-body">
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly/>

                </div>
            </div>
        </div>
    );
  }
}

module.exports = Content;