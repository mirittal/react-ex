var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');
 global.jQuery = $; 
// require('bootstrap')
var Slider = require('react-slick');
var Request = require('../utils/Request');





var Home = React.createClass({

	getInitialState() {
		return {
			movies: [{"Rank":1,"Id":3,"Name":"The Shawshank Redemption"},{"Rank":2,"Id":458,"Name":"TAXI TO THE DARK SIDE (2007)"},{"Rank":3,"Id":451,"Name":"AMY (2015)"},{"Rank":4,"Id":542,"Name":"PROJECT NIM (2011)"},{"Rank":5,"Id":514,"Name":"JIRO DREAMS OF SUSHI (2012)"},{"Rank":6,"Id":73,"Name":"The Lord of the Rings: The Fellowship of the Ring"},{"Rank":7,"Id":66,"Name":"Fight Club"},{"Rank":8,"Id":374,"Name":"The Lion King"},{"Rank":9,"Id":395,"Name":"Cinema Paradiso"},{"Rank":10,"Id":409,"Name":"Django Unchained"}],
			movieDetails: []
		}
	},

	componentWillMount() {
		var data = {startRankIndex:1, numMovies: 10};
		Request.getData('https://interview.zocdoc.com/api/1/FEE/MoviesByRank', data, function(response){
			this.setState({ movies: response })
			let movieIds = this.state.movies.map(function(c){return c.Id});
			this.getMovieInfo(movieIds);
		}.bind(this));
		
	},

	getMovieInfo(movieIds) {
		var data = {movieIds: movieIds};
		Request.getData('https://interview.zocdoc.com/api/1/FEE/MovieDetails', data, function(response){
			var topList = this.state.movies;
			
			var movies = topList.map(function(v){
			    var obj;
			    $.each(response, function(i, v2){
			        if(v2.Id === v.Id){
			            obj = $.extend({}, v2, v); // merge the objects in to a new one
			            return false; // break the loop
			        }  
			    });
			    return obj;

			});	
			this.setState({ movies: movies })
		}.bind(this));
		
	},

	componentDidMount() {
		
	},

	

	render() {
		
		return (
			<div>
				 <Movie items={this.state.movies} />				
			</div>
		);

	}
});

var Movie =	React.createClass({
	showMore() {
 		alert(3)
	},

	addMovie(item, i) {
		return (
			<div key={i}>
				<h3>hi</h3>
				<Link to={'/movie/' + i}>{item.Name}</Link>
				{item.Description}<br/>
				<button className="btn btn-primary">Get Tickets</button>
		    </div>
		)
	},

  	render(){
  		var settings = {
		    dots: true,
		    infinite: true,
		    speed: 700,
		    slidesToShow: 3,
		    slidesToScroll: 1,
		    autoplay: false,
		    arrows: true,
		    responsive: [
		        {
		          breakpoint: 1024,
		          settings: {
		            slidesToShow: 3,
		            slidesToScroll: 3,
		            infinite: true,
		            dots: true
		          }
		        },
		        {
		          breakpoint: 600,
		          settings: {
		            slidesToShow: 2,
		            slidesToScroll: 2
		          }
		        },
		        {
		          breakpoint: 480,
		          settings: {
		            slidesToShow: 1,
		            slidesToScroll: 1
		          }
		        }
		        
		      ]
	    };
	    return (	     
	    		<Slider className="responsive" {...settings}>   
				{
					this.props.items.map(this.addMovie)
				}
				</Slider>
	      	
	    )  
	}
});

module.exports = Home;
