var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');


var {Router, Route, IndexRoute} = ReactRouter;
// playing with ES6 syntax. Babel will convert to ES5 equivalent: 
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var IndexRoute = ReactRouter.IndexRoute;



var APP = require('./components/APP');
var Home = require('./components/Home');
var Movies = require('./components/Movies'); 
var Movie = require('./components/Movie'); 

var routes = (
	<Route path="/" component={APP}>
	  	<IndexRoute component={Home}/>
	  	<Route path="movies" component={Movies} />
	  	<Route path="/movie/:id" component={Movie}/>
	</Route>
);


ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));


