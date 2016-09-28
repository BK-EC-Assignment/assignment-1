var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
});

module.exports = Main;
