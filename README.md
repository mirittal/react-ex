# react-ex

## Installation

> npm install

Install project dependencies as defined in package.json

## Run

> npm start

App now runs at: http://localhost:5000
npm start will run webpack (pack all js files and convert ES6 to ES5 and react jsx)   
following by starting a node/express server  


## Notes
- Project github: https://github.com/mirittal/react-ex.git
- This assignment was an opprtunity to learn ReactJS and experiment with ES6 new features.
- Running the app on dev mode assumes you have Node.js installed.
- If you can't run the project either browse to /public and click index.html or goto: http://miritt.org/zocdoc-ex (there's currently a bug with the homepage slider icons, but I'm hoping to fix it soon)



## TODO - open tasks
- Add flux to manage API calls
- Better responsive exeprience - especially implement a different solution for hover state, movie-box. Might consider using modal to show additional info, instead of the hover state.
- Better treatment for long movie titles and long descriptions
- authToken treatment - need more info - should expire 3 hours from initial use (redirect to login ?)
- Save api responses in local storage, not to repeat calls
- Slider plugin on homepage is a bit buggy - pauseOnHover state is not working, so I decided not to use auto-play, although this would be my preference.
- Add websync and less-reload to webpack (instead of gulp)
- Progressive loading of movie list
- Minify JS and CSS. Clean unused includes.
- More styling...
