var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var Nav = require('react-bootstrap').Nav;
var Navbar = require('react-bootstrap').Navbar;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;
var MovieItem = require('./parts/MovieItem');
var Request = require('../utils/Request');
require('../utils/Utils');

var Movies = React.createClass({
	getInitialState() {
		return {
			title: "ALL MOVIES",
			allMovies: [],
			movies: [],
			generes: [],
			actors: []
		}
	},

	componentWillMount() {
		Request.getData('https://interview.zocdoc.com/api/1/FEE/AllMovies', {}, function(data){
			this.setState({ movies: data })
			this.setState({ allMovies: data })
			this.generateUniqueLists();
		}.bind(this));
	},

	generateUniqueLists() {
		let generes = this.state.movies.map(function(c){return c.Genres});
 		let merged = [].concat.apply([], generes);
 		let unique_generes = merged.unique();
 		this.setState({ generes: unique_generes });
 		
 		let actors = this.state.movies.map(function(c){return c.Actors});
 		merged = [].concat.apply([], actors);
 		let unique_actors = merged.unique();
 		this.setState({ actors: unique_actors })
	},
	

	filterGeneres(e){
		this.filterResults(e, 'Genres')
	},

	filterActors(e){
		this.filterResults(e, 'Actors')
	},

	filterResults(e, filterBy) {
		let selected = e.target.text;
		if (selected == "Show All") {
			this.setState({ movies: this.state.allMovies });
			this.setState({ title: "ALL MOVIES" });	
		} else {
			let filtered = this.state.allMovies.filter(function(c){
				for(var i=0; i < c[filterBy].length; i++) {
					if (c[filterBy][i] == selected) {
						return true;
					}
				}
				return false;
			});
			this.setState({ movies: filtered })	
			this.setState({ title: "MOVIES - " + selected });	
		}
		
	},	


	render() {
		return (
			<div>
				<h2>{this.state.title}</h2>


				<Navbar>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">Search:</a>
				      </Navbar.Brand>
				    </Navbar.Header>
				    <Nav>
				      
				      <NavDropdown refs="generes" id="GenereNavDropdown" title="Filter by Genre" onSelect={this.filterGeneres}>
				        <MenuItem key={'defualt-g'} >Show All</MenuItem>
				        {
					  		this.state.generes.map(function(item,i){
					  			
					  			return (
					  				 <MenuItem key={'dd_g' + i} >{item}</MenuItem>
					  			)
					  		})

					  	}
				      </NavDropdown>

				      <NavDropdown refs="actors" id="actorsNavDropdown" title="Filter by Actor" onSelect={this.filterActors}>
				        <MenuItem key={'defualt-g'} >Show All</MenuItem>
				        {
					  		this.state.actors.map(function(item,i){
					  			
					  			return (
					  				 <MenuItem key={'dd_a' + i} >{item}</MenuItem>
					  			)
					  		})

					  	}
				      </NavDropdown>
				    </Nav>
				  </Navbar>
				
				<Movie items={this.state.movies} />
			</div>
		);

	}
});

var Movie =	React.createClass({
	addMovie(item, i) {
		return (
			<li key={'mi' + i}><MovieItem item={item} /></li>
		)
	},
  	render(){	
	    return (	     
	    		<ul className='list-inline' id="AllMovies">   
				{
					this.props.items.map(this.addMovie)
				}
				</ul>      	
	    )  
	}
});




module.exports = Movies;


