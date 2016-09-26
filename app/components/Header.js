var React = require('react');

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
                <a href="#">Login</a>
              </li>
              <li className="sep">|</li>
              <li>
                <a href="#">Introduce</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="layout-menu">
          <div id="navbar">
            <ul id="navbar-links">
              <li className="selected">
                <a href="#"> ĐANH ĐẤU GIÁ </a>
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
