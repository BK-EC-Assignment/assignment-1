var React = require('react');



var Footer = React.createClass({
  render: function () {
    return (
    	<footer className="footer">
    		<div className="container-fluid">
    			<div className="row">
    				
    				<div className="col-md-6">
    					<h3>Giới thiệu</h3>
    					<hr/>
    					<text></text>
    				</div>
    				<div className="col-md-6">
    					<h3>Liên hệ</h3>
    					<hr/>
    					<text><i className="glyphicon glyphicon-envelope"></i> 51304364@hcmut.edu.vn</text>
    					<br/>
    					<text><i className="glyphicon glyphicon-phone"></i> 01225417247</text>

    				</div>
    			</div>
    		</div>
    	</footer>
    	)
    } 
});
module.exports = Footer;