var React = require('react-native');
var CounterApp = require('./CounterApp');
var { createRedux } = require('redux');
var { Provider } = require('redux/react-native');
var stores = require('../stores');

const redux = createRedux(stores);

var App = React.createClass({
  render() {
    return (
      <Provider redux={redux}>
        {() => <CounterApp />}
      </Provider>
    );
  }
});

module.exports = App;