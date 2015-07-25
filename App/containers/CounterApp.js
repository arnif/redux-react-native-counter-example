var React = require('react-native');
var { bindActionCreators } = require('redux');
var { Connector } = require('redux/react-native');
var Counter = require('../components/Counter');
var CounterActions = require('../actions/CounterActions');

var { View } = React;

var CounterApp = React.createClass({
  render() {
    return (
      <Connector select={state => ({ counter: state.counter })}>
        {this.renderChild}
      </Connector>
    );
  },

  renderChild({ counter, dispatch }) {
    const actions = bindActionCreators(CounterActions, dispatch);
    return (
      <Counter counter={counter}
               actions={actions} />
    );
  }
});

module.exports = CounterApp;