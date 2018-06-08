import * as actions from '../actions';

const initialState = { name: 'default', size: null };

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.SET_ACTIVE_BREAKPOINT: {
      return { ...state, name: action.breakpointName, size: action.breakpointSize };
    }
    default:
      return state;
  }
}

export default reducer;
