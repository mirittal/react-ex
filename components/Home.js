var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');
 global.jQuery = $; 
// require('bootstrap')
var MovieItem = require('./parts/MovieItem');
var Slider = require('react-slick');
var Request = require('../utils/Request');





var Home = React.createClass({

	getInitialState() {
		return {
			movies: [{"Duration":"142 min","Description":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.","Director":"Frank Darabont","Genres":["Crime","Drama"],"Actors":["Tim Robbins","Morgan Freeman","Bob Gunton","William Sadler","Clancy Brown","Gil Bellows","Mark Rolston","James Whitmore","Jeffrey DeMunn","Larry Brandenburg","Neil Giuntoli","Brian Libby","David Proval","Joseph Ragno","Jude Ciccolella"],"Id":3,"Name":"The Shawshank Redemption","Rank":1},{"Duration":"1 hr. 46 min.","Description":"A stunning inquiry into the suspicious death of an Afghani taxi driver at Bagram air base in 2002, the film is a fastidiously assembled, uncommonly well researched examination of how an innocent civilian was apprehended, imprisoned, tortured, and ultimately murdered by the greatest democracy on earth. Intermingling documents and records of the incident with candid testimony from eyewitnesses and participants, the film uncovers an inescapable link between the tragic incidents that unfolded in ...","Director":"Alex Gibney","Genres":["Documentary","Special Interest"],"Actors":["Moazzam Begg","Willie Brand","Jack Cloonan","John Scott Horton","Damien Corsetti","Alberto J. Mora","Carlotta Gall","Clive Stafford Smith","Tim Golden","Tony Lagouranis","Carl Levin","Alfred McCoy","Alberto Mora","Anthony Morden","Glendale Walls","Lawrence Wilkerson","Tim Wilner","John Yoo","Alex Gibney","Ken Davis"],"Id":458,"Name":"TAXI TO THE DARK SIDE (2007)","Rank":2},{"Duration":"2 hr. 8 min.","Description":"Despite just two albums to her name Amy Winehouse is one of the biggest music icons in British history. With a voice oft described as a combination of Billy Holiday, Dinah Washington and Sarah Vaughan, Amy Winehouse was a pop star with soul; a once in two generational musical talent whose appeal crossed cultural and demographic boundaries. But while her music made her a star, her chaotic personal life stole headlines.","Director":"Asif Kapadia","Genres":["Documentary","Musical & Performing Arts","Art House & International","Special Interest"],"Actors":["Yasiin Bey","Mark Ronson","Tony Bennett","Pete Doherty","Blake Fielder-Civil","Mitch Winehouse","Tyler James","Salaam Remi","Janis Winehouse","Monte Lipman","Blake Wood","Lucian Grainge","Nick Shymansky","Juliette Ashby","Nick Gatfield","Lauren Gilbert","Darcus Beese","Chip Somers","Amy Winehouse"],"Id":451,"Name":"AMY (2015)","Rank":3},{"Duration":"1 hr. 39 min.","Description":"From the team behind Man on Wire comes the story of Nim, the chimpanzee who in the 1970s became the focus of a landmark experiment which aimed to show that an ape could learn to communicate with language if raised and nurtured like a human child. Following Nim's extraordinary journey through human society, and the enduring impact he makes on the people he meets along the way, the film is an unflinching and unsentimental biography of an animal we tried to make human. What we learn about his true ...","Director":"James Marsh","Genres":["Documentary","Art House & International"],"Actors":["Garry Harris","Stephanie Lafarge","Jenny Lee Wright","Laura Ann Petitto","Joyce Butler","Bill Tynan","Renee Falitz","Bob Ingersoll","James Mahoney"],"Id":542,"Name":"PROJECT NIM (2011)","Rank":4},{"Duration":"1 hr. 21 min.","Description":"Jiro Dreams of Sushi is the story of 85 year-old Jiro Ono, considered by many to be the world's greatest sushi chef. He is the proprietor of Sukiyabashi Jiro, a 10-seat, sushi-only restaurant inauspiciously located in a Tokyo subway station. Despite its humble appearances, it is the first restaurant of its kind to be awarded a prestigious 3 star Michelin review, and sushi lovers from around the globe make repeated pilgrimage, calling months in advance and shelling out top dollar for a coveted ...","Director":"David Gelb","Genres":["Documentary","Art House & International","Special Interest"],"Actors":["Jiro Ono","Yoshikazu Ono","Takashi Ono","Hachiro Mizutani","Masuhiro Yamamoto"],"Id":514,"Name":"JIRO DREAMS OF SUSHI (2012)","Rank":5},{"Duration":"178 min","Description":"A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.","Director":"Peter Jackson","Genres":["Adventure","Fantasy"],"Actors":["Alan Howard","Noel Appleby","Sean Astin","Sala Baker","Sean Bean","Cate Blanchett","Orlando Bloom","Billy Boyd","Marton Csokas","Megan Edwards","Michael Elsworth","Mark Ferguson","Ian Holm","Christopher Lee","Lawrence Makoare"],"Id":73,"Name":"The Lord of the Rings: The Fellowship of the Ring","Rank":6},{"Duration":"139 min","Description":"An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...","Director":"David Fincher","Genres":["Drama"],"Actors":["Edward Norton","Brad Pitt","Helena Bonham Carter","Meat Loaf","Zach Grenier","Richmond Arquette","David Andrews","George Maguire","Eugenie Bondurant","Christina Cabot","Sydney 'Big Dawg' Colston","Rachel Singer","Christie Cronenweth","Tim DeZam","Ezra Buzzington"],"Id":66,"Name":"Fight Club","Rank":7},{"Duration":"89 min","Description":"Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.","Director":"Roger Allers","Genres":["Animation","Adventure","Drama","Family","Musical"],"Actors":["Jonathan Taylor Thomas","Matthew Broderick","James Earl Jones","Jim Cummings","Jeremy Irons","Moira Kelly","Niketa Calame","Ernie Sabella","Nathan Lane","Robert Guillaume","Rowan Atkinson","Madge Sinclair","Whoopi Goldberg","Cheech Marin","Jason Weaver"],"Id":374,"Name":"The Lion King","Rank":8},{"Duration":"155 min","Description":"A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.","Director":"Giuseppe Tornatore","Genres":["Comedy","Drama"],"Actors":["Antonella Attili","Enzo Cannavale","Isa Danieli","Leo Gullotta","Marco Leonardi","Pupella Maggio","Agnese Nano","Leopoldo Trieste","Salvatore Cascio","Tano Cimarosa","Nicola Di Pinto","Roberta Lena","Nino Terzo","Jacques Perrin","Brigitte Fossey"],"Id":395,"Name":"Cinema Paradiso","Rank":9},{"Duration":"165 min","Description":"With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.","Director":"Quentin Tarantino","Genres":["Western"],"Actors":["Jamie Foxx","Christoph Waltz","Leonardo DiCaprio","Kerry Washington","Samuel L. Jackson","Walton Goggins","Dennis Christopher","James Remar","David Steen","Dana Gourrier","Nichole Galicia","Laura Cayouette","Ato Essandoh","Sammi Rotibi","Clay Donahue Fontenot"],"Id":409,"Name":"Django Unchained","Rank":10}]

//			movies: [{"Rank":1,"Id":3,"Name":"The Shawshank Redemption"},{"Rank":2,"Id":458,"Name":"TAXI TO THE DARK SIDE (2007)"},{"Rank":3,"Id":451,"Name":"AMY (2015)"},{"Rank":4,"Id":542,"Name":"PROJECT NIM (2011)"},{"Rank":5,"Id":514,"Name":"JIRO DREAMS OF SUSHI (2012)"},{"Rank":6,"Id":73,"Name":"The Lord of the Rings: The Fellowship of the Ring"},{"Rank":7,"Id":66,"Name":"Fight Club"},{"Rank":8,"Id":374,"Name":"The Lion King"},{"Rank":9,"Id":395,"Name":"Cinema Paradiso"},{"Rank":10,"Id":409,"Name":"Django Unchained"}],
//			movieDetails: []
		}
	},

	componentWillMount() {
		
		// var data = {startRankIndex:1, numMovies: 10};
		// Request.getData('https://interview.zocdoc.com/api/1/FEE/MoviesByRank', data, function(response){
		// 	this.setState({ movies: response })
		// 	let movieIds = this.state.movies.map(function(c){return c.Id});
		// 	this.getMovieInfo(movieIds);
		// }.bind(this));
		
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
				<h2>Top 10 Movies of the Year</h2>
				<Movie items={this.state.movies} />	
				<div className="call-to-actions"><Link to={'/movies/'} className="btn btn-secondary">Find More Movies</Link></div>
			</div>
		
		);

	}
});

var Movie =	React.createClass({
	showMore(item) {
 		return (
 			<p>
 				<b>Actors:</b> 
				<span>
				{ 
					item.Actors.map(function(i){ 
						return (i<3)? <span>{i}, </span> : ""; 
					}) 
				}
				</span>
			</p>
		)
	},

	addMovie(item, i) {
		return (
			<div key={item.Id}>
				<MovieItem item={item} />
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
		    pauseOnHover: true,
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
