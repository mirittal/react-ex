var React = require('react');
var Router = require('react-router');

var $ = require('jquery');
var Header = require('./parts/Header')

var APP = React.createClass({	
	getInitialState() {
		return {
			
		}
	},

	render() {
		return(
				<div>
					<Header title="ZocDoc" status={this.state.status} />
					{this.props.children}
				</div>
		);
	}
})

module.exports = APP;