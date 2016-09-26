var React = require('react');

var Login = React.createClass({
  render: function () {
    return (
      <div className="panel panel-default text-center" id="main">
        <div className="panel-heading"><h3 className="panel-title"><strong>Sign In </strong></h3></div>
          <div className="panel-body">
           <form role="form">
            <div className="form-group">
              <label className="labelLogin">Username or Email</label>
              <input type="email" className="form-control inputlogin" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label className="labelLogin">Password <a href="/sessions/forgot_password">(forgot password)</a></label>
              <input type="password" className="form-control inputlogin" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-sm btn-default">Sign in</button>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Login;
