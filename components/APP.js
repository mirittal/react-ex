var React = require('react');
var Router = require('react-router');

var $ = require('jquery');
var Header = require('./parts/Header')


var APP = React.createClass({
	
	getInitialState() {
		return {
			status: 'disconnected'
		}
	},

	componentWillMount() {
		this.disconnect();
		//this.getData();
	},

	connect() {
		//calling setState calls render
		this.setState({ status: 'connected' })
	},

	disconnect() {
		this.setState({ status: 'disconnect' })
	},

	getData() {
		$.ajax({
		  url: 'https://interview.zocdoc.com/api/1/FEE/AllMovies',
		  type: 'GET',
		  data: {authToken: '3b502b3f-b1ff-4128-bd99-626e74836d9c'},
		}).done(function(data) {
		  	this.connect();
		}.bind(this))
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