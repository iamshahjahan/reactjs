import React from "react";
import Child from "./Child"


export default class Parent extends React.Component
{
	constructor()
	{
		super();
		this.state = {
			'name':"Shahjahan"
		}
	}

	changeName(event)
	{
		this.setState({
			'name': event.target.value
		});
		event.preventDefault();
	}

	render(){
		return(<div>
			Parent
			<Child name = {this.state.name}></Child>
			<br></br>
			    <input type="text" id="name" onChange={this.changeName.bind(this)} />
			<br></br>
			</div>);
	}
}