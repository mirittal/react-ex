var React = require('react');
import { browserHistory, Router, Route, Link } from 'react-router'
var Request = require('../utils/Request');


var Movie = React.createClass({
	
	getInitialState() {
		return {
			movieId: this.props.params.id,
			movieInfo: []
		}
	},

	componentWillMount() {
		var data = {movieIds: this.state.movieId};
		Request.getData('https://interview.zocdoc.com/api/1/FEE/MovieDetails', data, function(response){
			this.setState({ movieInfo: response })
		}.bind(this));
	},

	render() {
	    return (
		      <div className="container">
		      	{
	      			this.state.movieInfo.map(function(item,i) {
	      				return (
		      				<div key={i}>
			      				<h1>{item.Name}</h1>
						        <h2>Director: {item.Director}</h2>
						        <p>{item.Description}</p>
						        <p><b>Duration:</b> {item.Duration} </p>
						        <p><b>Generes:</b> {item.Genres.toString()}</p>
						        <p><b>Actors:</b> {item.Actors.toString()}</p>
						    </div>
						)
	      			})
		      			

		      	}
			        
		      </div>
	    )
	  }
});

module.exports = Movie;
