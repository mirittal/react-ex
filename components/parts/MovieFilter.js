var React = require('react');
var ReactDOM = require('react-dom');

var movieFilter = React.createClass({

	doFilter() {
		var g = ReactDOM.findDOMNode(this.refs.genres).value;
		alert(g);
	},

	render() {
		return (
			<form action="javascript:void(0)" onSubmit={this.doFilter}>
				<label>Genres</label>
				<input	ref="genres"
						className="form-control"
						placeholder="" />

				<button className="btn btn-primary">go</button>
			</form>
		)
	
	}

})

module.exports = movieFilter;