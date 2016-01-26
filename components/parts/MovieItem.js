var React = require('react');
var Link = require('react-router').Link;

var MovieItem =	React.createClass({

  	render(){
  		    
		return (
			<div key={'i'+ this.props.item.Id} className="movie-frame">
				<img src="images/placeholder.jpg" />
				<h3><Link to={'/movie/' + this.props.item.Id}>{this.props.item.Name}</Link></h3>
				<div className="more-info">
					<h3>{this.props.item.Name}</h3>
					<h4>Director: {this.props.item.Director}</h4>
					<p>{this.props.item.Description}</p>
					<Link to={'/movie/' + this.props.item.Id} className="read-more">Read More &raquo;</Link>
				</div>
				<div className="main-button">
					<button className="btn btn-info"><a target="_blank" href="http://zocdoc.com">Get Tickets</a></button>
				</div>
		    </div>
		)
	      	 
	}
});

module.exports = MovieItem;
