var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var Login = require('../containers/HandleLogin');
var Single = require('../components/Single')

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/login' header="Login" component={Login} />
      <Route path='/single' header="Single" component={Single} />
    </Route>
  </Router>
);

module.exports = routes;
