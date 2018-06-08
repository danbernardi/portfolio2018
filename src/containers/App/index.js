import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../../routes/Home';
import SampleRoute from '../../routes/SampleRoute';
import '../../styles/core.css';
import { withRouter } from 'react-router';
import { initReduxBreakpoints } from '../../utils/responsiveHelpers';

export class App extends Component {
  constructor (props) {
    super(props);
    /*
     * Initialize an empty array for collecting the current
     * state of our media queries. This will be pushed into the store.
    */
    this.mediaQueryState = [];
  }

  // Create the event handler inside componentDidMount
  componentDidMount () {
    initReduxBreakpoints.call(this);
  }

  render () {
    return (
      <div>
        <Route exact={ true } path="/" component={ Home } />
        <Route path="/sample" component={ SampleRoute } />
      </div>
    );
  }
}

export default withRouter(connect()(App));
