import * as actions from '../actions';

const initialState = { toggleRSLogo: false, quoteOfTheDay: '' };

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.TOGGLE_LOGO: {
      return { ...state, toggleRSLogo: !state.toggleRSLogo };
    }
    case actions.RECEIVE_QUOTE_OF_THE_DAY:
      return { ...state, quoteOfTheDay: action.quote.contents.quotes[0].quote };
    default:
      return state;
  }
}

export default reducer;
