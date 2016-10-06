var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <div id="wrapper" className="row">
          <div id="header-container" className="col-md-12 col-sm-12 col-xs-12 padding">
          <div id="deco-nav" className="col-md-12"></div>
           <div id="logo" className="col-md-3 col-sm-1">
            <a href="#" title="Home page">
              <img id="logo" src="../app/images/logo.png" alt="HCMUT"/>
            </a>
          </div>
          <div id="main-search" className="col-md-6 col-sm-5">
            <div className="form-group">
              <div id="div-search" className="col-md-10 col-sm-10 col-xs-10">
                <input type="text" className="form-control" id="search-input" placeholder="Tôi muốn mua ..."/>
              </div>
              <div id="div-button" className="col-md-2 col-sm-2 col-xs-2">
                <button type="button" className="btn btn-success" id="search-button"><i className="glyphicon glyphicon-search"></i></button> 
              </div>
            </div>  
          </div>
          <div id="side-right" className="col-md-3 col-sm-4">
            <div className="col-md-6 col-sm-6 col-xs-6">
            <Link to="/login">
            <button type="button" className="btn btn-success" id="login-button">Đăng nhập</button>
            </Link>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
            <button type="button" className="btn btn-success" id="signup-button">Đăng ký</button>
            </div>
          </div>
          </div>
          <div id="navigator" className="col-md-12 col-sm-12 padding">
              <div id="nav-left" className="col-md-3 col-sm-3 col-xs-4"> 
                <div className="dropdown">
                  <button className="dropbtn">Danh mục <i className="glyphicon glyphicon-triangle-bottom"></i></button>
                  <div className="dropdown-content">
                    <Link to="/category">Giải trí, Thể thao, Sở thích</Link>
                    <a href="#">Đồ điện tử</a>
                    <a href="#">Đồ gia dụng</a>
                  </div>
                </div>

              </div>
              <div className="col-md-6 col-sm-6 col-xs-8"> 
              <ul id="tabs">
                <li>
                  <a href="#">Trang chủ</a>
                </li>
                
                <li><a href="#">Đang đấu giá</a></li>
              </ul>
              </div>
              <div className="col-md-3 col-sm-3"> 
                
              </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Header;
