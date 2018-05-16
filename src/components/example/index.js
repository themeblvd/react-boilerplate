import React, { Component } from 'react';
import './style.scss';

export default class Example extends Component {
	render() {
		return (
			<div className="components-example">
				<h2>Example Component</h2>
				<p>Every component other than <code>App</code> should be in a folder within <code>/components</code> like this one.</p>
			</div>
		);
	}
}
