var React = require('react');
var GridProducts = require('./GridProducts');

var Home = React.createClass({
  render: function () {
    return (
      <div className="wrap"> This is Home page
      	<GridProducts />
      </div>
    )
  }
});

module.exports = Home;
