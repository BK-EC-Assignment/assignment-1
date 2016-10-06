var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var GridProducts = React.createClass({
	render: function() {
		return (
			<div className="container grid-products">
				<div className="row">
					<div className="col-md-12 padding-none">
						<header className="grid-header">SẢN PHẨM MỚI</header>
						<div className="col-md-2 col-sm-3 col-xs-6 grid-figure"> 
							<Link to="/single">
							<figure>
								<img src="../app/images/photo01.jpg"/>
								<figcaption className="title">Đèn ngủ là của mọi người, mọi người ơi</figcaption>
								<div className="col-md-8 padding-none">
									<figcaption className="price">155 000d</figcaption>
								</div>
								<div className="col-md-4 padding-none">
									<figcaption className="due">11 ngày</figcaption> 
								</div>
							</figure>
							</Link>
						</div>
						<div className="col-md-2 col-sm-3 col-xs-6 grid-figure"> 
							<figure>
								<img src="../app/images/photo02.jpg"/>
								<figcaption className="title">Đèn ngủ là của mọi người, mọi người ơi</figcaption>
								<div className="col-md-8 padding-none">
									<figcaption className="price">155 000d</figcaption>
								</div>
								<div className="col-md-4 padding-none">
									<figcaption className="due">11 ngày</figcaption> 
								</div>
							</figure>
						</div>
						<div className="col-md-2 col-sm-3 col-xs-6 grid-figure"> 
							<figure>
								<img src="../app/images/photo03.jpg"/>
								<figcaption className="title">Đèn ngủ là của mọi người, mọi người ơi</figcaption>
								<div className="col-md-8 padding-none">
									<figcaption className="price">155 000d</figcaption>
								</div>
								<div className="col-md-4 padding-none">
									<figcaption className="due">11 ngày</figcaption> 
								</div>
							</figure>
						</div>
						<div className="col-md-2 col-sm-3 col-xs-6 grid-figure"> 
							<figure>
								<img src="../app/images/photo04.jpg"/>
								<figcaption className="title">Đèn ngủ là của mọi người, mọi người ơi ới ơi</figcaption>
								<div className="col-md-8 padding-none">
									<figcaption className="price">155 000d</figcaption>
								</div>
								<div className="col-md-4 padding-none">
									<figcaption className="due">11 ngày</figcaption> 
								</div>
							</figure>
						</div>
						<div className="col-md-2 col-sm-3 col-xs-6 grid-figure"> 
							<figure>
								<img src="../app/images/photo05.jpg"/>
								<figcaption className="title">Ghế để ngủ, coi phim ma</figcaption>
								<div className="col-md-8 padding-none">
									<figcaption className="price">155 000d</figcaption>
								</div>
								<div className="col-md-4 padding-none">
									<figcaption className="due">11 ngày</figcaption> 
								</div>
							</figure>
						</div>
						<div className="col-md-2 col-sm-3 col-xs-6 grid-figure"> 
							<figure>
								<img src="../app/images/photo06.jpg"/>
								<figcaption className="title">Bàn nhậu</figcaption>
								<div className="col-md-8 padding-none">
									<figcaption className="price">155 000d</figcaption>
								</div>
								<div className="col-md-4 padding-none">
									<figcaption className="due">11 ngày</figcaption> 
								</div>
							</figure>
						</div>			
					</div>
				</div>
			</div>
			)
	}
});

module.exports = GridProducts;