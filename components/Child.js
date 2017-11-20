import React from "react";

export default class Child extends React.Component
{
	render(){
		return(<div>The name passed is: {this.props.name}</div>);
	}
}