var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <div id="wrapper" className="row">
          <div id="header-container" className="col-md-12 padding">
          <div id="deco-nav" className="col-md-12"></div>
           <div id="logo" className="col-md-3">
            <a href="#" title="Home page">
              <img id="logo" src="../app/images/logo.png" alt="HCMUT"/>

            </a>
          </div>
          <div id="main-search" className="col-md-6">
            <div className="form-group">
              <div id="div-search" className="col-md-10">
                <input type="text" className="form-control" id="search-input" placeholder="Tôi muốn mua ..."/>
              </div>
              <div id="div-button" className="col-md-2">
                <button type="button" className="btn btn-success" id="search-button">Tìm kiếm</button> 
              </div>
            </div>  
          </div>
          <div id="side-right" className="col-md-2">
            <div className="col-md-6 col-sm-6">
            <Link to="/login">
            <button type="button" className="btn btn-success" id="login-button">Đăng nhập</button>
            </Link>
            </div>
            <div className="col-md-6 col-sm-6">
            <button type="button" className="btn btn-success" id="signup-button">Đăng ký</button>
            </div>
          </div>
          </div>
          <div id="navigator" className="col-md-12">
              <ul id="tabs">
                <li>
                  <a href="#">Danh mục</a>
                </li>
                <li><a href="#">Đang đấu giá</a></li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Header;
