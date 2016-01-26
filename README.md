# react-ex

## Installation

> npm install
will install all dependencies as defined in package.json

## Run

> npm start

App now runs at: http://localhost:5000
npm start will run webpack (pack all js files and convert ES6 to ES5 and react jsx)   
following by starting a node/express server  


## Notes
- Project github: https://github.com/mirittal/react-ex.git 
- Running the app on dev mode assumes you have node installed.
- If you can't run the project either browse to /public and click index.html or goto: http://miritt.org/zocdoc-ex (there's currently a bug with the homepage slider icons, but I'm hoping to fix it soon)
- This excercise took more than the suggested 4 hours to complete, since I decided to take advantage of this task and learn ReactJS. I was also playing around with the new ES6 syntax.


## TODO - open tasks
- Add flux to manage the API calls
- Better responsive exeprience - especially different solution for hover state
- Better treatment for long movie titles and long descriptions
- Slider plugin on homepage is a bit buggy - pauseOnHover state is not working, so I decided not to use auto-play, although this would be my preference.
- Add websync and less-reload to webpack (instead of gulp)
- Progressive loading of movie list
