var React = require("react");

class Modal extends React.Component {
  render() {

    return (



            <div className="modal fade " id="modalLogIn" tabIndex="-1" role="dialog" aria-labelledby="modalLogIn" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered " role="document">
                    <div className="modal-content bg-secondary border-success">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body bg-secondary">


                            <div id="first">
                                <div className="myform form bg-secondary">
                                    <div className="logo mb-3">
                                        <div className="col-md-12 text-center">
                                        <h1>Login</h1>
                                        </div>
                                    </div>

                                    <form action="/tweedr/register" method="post" name="login">
                                        <div className="form-group">
                                        <label htmlFor="inputUserName">User Name</label>
                                        <input type="text" name="name"  className="form-control" id="username"  placeholder="Enter User Name"/>
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Password</label>
                                        <input type="password" name="password" id="password"  className="form-control"  placeholder="Enter Password"/>
                                        </div>
                                        <div className="col-md-12 text-center ">
                                            <button type="submit" className=" btn btn-light mybtn tx-tfm">Login</button>
                                        </div>

                                        <div className="form-group">
                                        <p className="text-center">Don't have account? <a href="#" id="signup">Sign up here</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>




                        </div>

                    </div>
                </div>
            </div>


    );
  }
}

module.exports = Modal;