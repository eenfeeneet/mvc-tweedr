var React = require('react');

class SideProfile extends React.Component {
  render() {
    console.log("<SideProfile> Added")
    // console.log(this.props.user)
    const name = this.props.user.name
    return (
        <div className="col-md-3">
            <div className="card border-success">

                <div className="card-body">
                <p>Tweed Your Thoughts</p>
                <p>{name}</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleTextarea">Example textarea</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                        <button type="submit" className="btn btn-outline-success my-2">Submit</button>
                    </div>
                </form>
                </div>
            </div>
            <div className="card border-success my-2">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Settings</a>
                        <div className="dropdown-menu" x-placement="bottom-start">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                </ul>


            </div>
        </div>
    );
  }
}

module.exports = SideProfile;