import React from 'react';

export default class App extends React.Component {
	constructor()
	{
		super();
		console.log("i am in constructor.");
		this.state = {
			counter : 0
		}
	}

	componentWillMount()
	{
		console.log("I am in componentWillMount");
	}


	componentDidMount()
	{
		console.log("I am in componentDidMount");
		
	}


	componentWillUpdate()
	{
		console.log("I am in componentWillUpdate");
		
	}

	componentDidUpdate()
	{
		console.log("I am in componentDidUpdate");
	}

	shouldComponentUpdate()
	{
		console.log("I am in componentShouldUpdate");
		return true;
	}


	add()
	{
		console.log("inside counter.");
		this.setState({
			counter : this.state.counter + 1			
		});
	}

	render() {
		return (
			<div>
				{this.state.counter}
				<br/>
				<button type="button" onClick={this.add.bind(this)}>Add</button>	
			</div>
		);
	}
}

