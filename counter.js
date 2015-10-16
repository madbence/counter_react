var React = require ('react');
var ReactDOM = require ('react-dom');

var Counter = React.createClass({
	getInitialState: function () {
		return { count: 0 };	
	},
	handleClick: function () {
		this.setState({ count: this.state.count + 1 });
	},
	render: function () {
		return (
			<div>
				<h3>Counter using react</h3>
				<h2>Number of clicks: {this.state.count}</h2>
				<button onClick={this.handleClick}>Click me</button>
			</div>	
		); 
	}
});

var mountNode = document.getElementById('reactCounterNode');
ReactDOM.render(<Counter />, mountNode);