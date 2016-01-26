var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({	
	render(){
		return (
			<header className="row">
				<div className="col-xs-10">
					<h1><a href="#">Zoc<span className="grey">Movies</span></a></h1>
				</div>
				<div className="col-xs-2">
					<span>Hi user</span> |
					<Link to={'/movies'}> Browse All</Link>
				</div>
			</header>
		)
	}

})

module.exports = Header;