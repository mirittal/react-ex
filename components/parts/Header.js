var React = require('react');

var Header = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	
	render(){
		return (
			<header className="row">
				<div className="col-xs-10">
					<h1>Zoc<span class="grey">Movies</span></h1>
				</div>
				<div className="col-xs-2">
					<span>Hi user</span>
				</div>
			</header>
		)
	}

})

module.exports = Header;