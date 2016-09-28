var React = require('react');
var GridProducts = require('./GridProducts');

var Home = React.createClass({
  render: function () {
    return (
      <div className="wrap">
      	<GridProducts />
      </div>
    )
  }
});

module.exports = Home;
