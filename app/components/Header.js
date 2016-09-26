var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function () {
    return (
      <div id="lauout">
        <div id="layout-header" className="row">
          <div id="logo" className="col-md-2">
            <a href="#" title="Home page">
              <img src="../app/images/logo.png" alt="HCMUT"/>
            </a>
          </div>

          <div className="scrolling col-md-6">
            <h3>ECommerce - HCMUT</h3>
          </div>

          <div id="search-area">
            <input
              className="txtKeyword"
              type="text"
              placeholder="Search..." />
            <button className="btnSearch">Search</button>
          </div>

          <div id="user-menu-zone">
            <ul id="user-links">
              <li>
                <Link to='/login'>
                  Login
                </Link>
              </li>
              <li className="sep">|</li>
              <li>
              <Link to='/register'>
                Register
              </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="layout-menu">
          <div id="navbar">
            <ul id="navbar-links">
              <li className="selected">
                <a href="#"> ĐANG ĐẤU GIÁ </a>
              </li>
              <li><a href="#"> MỚI KẾT THÚC </a></li>
              <li><a href="#"> KẾT QUẢ </a></li>
              <li><a href="#"> TOP WINNER </a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Header;
