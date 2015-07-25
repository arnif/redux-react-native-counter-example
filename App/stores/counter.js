var types = require('../constants/ActionTypes');
var { INCREMENT_COUNTER, DECREMENT_COUNTER } = require('../constants/ActionTypes');

var initialState = 0;
module.exports = function counter(state, action) {
  state = state || initialState;
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  default:
    return state;
  }
}