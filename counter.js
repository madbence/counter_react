var React = require ('react');
var ReactDOM = require ('react-dom');
var redux = require ('redux');
var reactRedux = require ('react-redux');

var Counter = React.createClass({
  handleClick: function () {
    this.props.dispatch({
      type: 'INCREMENT',
    });
  },
  render: function () {
    return (
      <div>
        <h3>Counter using react</h3>
        <h2>Number of clicks: {this.props.count}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  },
});

var WrappedCounter = reactRedux.connect(state => state)(Counter);

var store = redux.createStore(function (state, action) {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count };
    default: return state;
  }
}, {
  count: 0,
});

var mountNode = document.getElementById('reactCounterNode');
ReactDOM.render(
  <reactRedux.Provider store={store}>
    <WrappedCounter />
  </reactRedux.Provider>, mountNode);
