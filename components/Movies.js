var React = require('react');

var Movies = React.createClass({
	render() {
		return (<h1>All movies {this.props.status}</h1>);

	}
});

module.exports = Movies;
