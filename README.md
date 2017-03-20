# React Animation Demo

This is a TodoList demo for animation usage with [React](https://facebook.github.io/react/). Every time you add or remove an item to the TodoList, it will go through some animations. Check out the source code to find more.

## Start

	npm install
	
	npm start

## Structure

	├── README.md
	├── node_modules
	├── package.json
	├── public
	│   ├── favicon.ico
	│   └── index.html
	└── src
	    ├── components
	    │   ├── App
	    │   │   ├── App.css
	    │   │   ├── App.js
	    │   │   ├── App.test.js
	    │   │   ├── index.js
	    │   │   └── logo.svg
	    │   └── TodoList
	    │       ├── TodoList.css
	    │       ├── TodoList.js
	    │       ├── TodoList.test.js
	    │       └── index.js
	    ├── index.css
	    └── index.js

The real story is in `src/components/`. There are two components, i.e, `App` and `TodoList`, and `App` contains a `TodoList`. In `TodoList.css`, several keyframe animations for adding/removing todo items are defined.

## Acknowledgement

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), thanks for the convenience it offers!

## License

No license, you can use it anywhere you like.


