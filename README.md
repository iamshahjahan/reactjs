In this repository, we are going to learn about:

npm: node package module
webpack: js bundler
react/react app life cycle/state/props

====================

Install npm:

sudo apt-get install npm.

-----------------

We need to install following dependencies:

All dependencies to compile es6 to es5.

babel
babel-cli
babel-core
babel-loader
babel-preset-react
babel-preset-es2015


webpack: This will be used to bundling our js files.
webpack-dev-server: a dev server
react: for react
react-dom: for handling dom in react


Do all of the above in one command:

npm install babel babel-cli babel-core babel-loader babel-preset-react babel-preset-es2015  webpack-dev-server webpack react react-dom

Let us do some actual task.

=============================

We would create following four files to begin with:

1. index.html ( one and only html page)
2. App.js (Our first Componennt)
3. main.js(To connect with index.html)
4. webpack.config.js ( our configuration file for webpack.)

Run the following command:

touch index.html App.js main.js webpack.config.js

We would start working with webpack.config.js. Here we will define all our configuration setup, such as, from where the webpack should start bundling, where should it put bundles etc.


In a config variable, we would define:

1. entry: what should be the entry point of our app? From where the bundling should happen? 
2. output: the output of bundle operation
3. devServer: the devServer configuration
4. module: this contains all the loader information

So, the final configuration of webpack.config.js file looks like:

	var config = {
		entry: './main.js',
		output: {
			filename:'bundle.js',
		},
		devServer: {
			inline: true,
			port:8080
		},
		module : {
			loaders :[
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',

					query: {
						presets: ['es2015','react']
					}
				}
			]
		}
	}

	module.exports = config;


The index.html consists of:

	<!DOCTYPE html>
	<html>
	<head>
		<title>First React App</title>
	</head>
	<body>
		<div id="app">
			
		</div>
		<script src="bundle.js"></script>
	</body>
	</html>

App.js is:

	import React from 'react';

	export default class App extends React.Component {
		render() {
			return (
				<div>
					Hello From React!!
				</div>
			);
		}
	}

main.js is:

	import React from "react";
	import { render } from "react-dom";
	import App from "./App";

	render(
	  	<App />,
	  document.getElementById('app')
	);

Now change the line scripts from package.json and add:

	"scripts": {
	    "start": "webpack-dev-server --hot"
	  }

Run npm start on command line, and output will be:

	Hello From React!!





