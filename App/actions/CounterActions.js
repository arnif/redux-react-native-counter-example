var { INCREMENT_COUNTER, DECREMENT_COUNTER } = require('../constants/ActionTypes');

var increment = () => {
  return {
    type: INCREMENT_COUNTER
  };
}

var decrement = () => {
  return {
    type: DECREMENT_COUNTER
  };
}

var incrementIfOdd = () => {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  }
}

var incrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

module.exports = {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync
};