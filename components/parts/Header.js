var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({	
	render(){
		return (
			<header className="row">
				<div className="col-xs-6">
					<h1><a href="#">Zoc<span className="grey">Movies</span></a></h1>
				</div>
				<div className="col-xs-6">
					<nav>
						<span>Welcome!</span> |
						<Link to={'/movies'}> Browse All</Link>
					</nav>
				</div>
			</header>
		)
	}

})

module.exports = Header;