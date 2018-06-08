/**/
import * as SampleUtil from '../utils/SampleUtil';

export const TOGGLE_LOGO = 'TOGGLE_LOGO';
export const RECEIVE_QUOTE_OF_THE_DAY = 'RECEIVE_QUOTE_OF_THE_DAY';
export const SET_ACTIVE_BREAKPOINT = 'SET_ACTIVE_BREAKPOINT';

// Sync actions
export const toggleRSLogo = (showRSLogo) => ({
  type: TOGGLE_LOGO,
  showRSLogo
});

export const receiveQuoteOfTheDay = (quote) => ({
  type: RECEIVE_QUOTE_OF_THE_DAY,
  quote
});

/**
 * Changes the active breakpoint
 *
 * @param {string} breakpointName          String defining the active breakpoint
 * @param {number} breakpointSize          Number defining the active breakpoint
 * @return {Object} Action object
 */
export const setActiveBreakpoint = (breakpointName, breakpointSize) => ({
  type: SET_ACTIVE_BREAKPOINT, breakpointName, breakpointSize
});

// Async actions
export const getQuoteOfTheDay = () => async dispatch => {
  try {
    const quote = await SampleUtil.fetchQuoteOfTheDay();
    dispatch(receiveQuoteOfTheDay(quote));
  } catch (error) {
    dispatch(receiveQuoteOfTheDay({
      contents: { quotes: [{ quote: error.message }] }
    }));
  }
};
