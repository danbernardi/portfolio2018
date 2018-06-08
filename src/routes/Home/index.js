import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bool, func, string, object } from '../../utils/propTypes';
import { toggleRSLogo, getQuoteOfTheDay } from '../../redux/actions';
import logo from '../../assets/logo.svg';
import rsLogo from '../../assets/rs-logo.png';
import './Home.css';

import { setClass } from '../../utils/responsiveHelpers';

export const Home = ({ onToggleClick, quoteOfTheDay, getQuoteOfTheDay, showRSLogo, breakpoint }) => {
  const logoPath = showRSLogo ? rsLogo : logo;

  return (
    <div className="app">
      <header className="app__header">
        <div className="row">
          <img src={ logoPath } className="app__logo" alt="logo" />
          <h1 className="app__title typ--bold">Welcome to React</h1>
        </div>
      </header>
      <div className="row my4">
        <p className="mb4">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn mr1" onClick={ onToggleClick }>Toggle Logo</button>
        <button className="btn ml1" onClick={ getQuoteOfTheDay }>Get Quote Of The Day</button>
        <p className="mt2">{ quoteOfTheDay }</p>

        <div className="cf typ--left py3">
          <div className={ setClass({ default: 'col--7', mobileLg: 'col--12 mb4' }, breakpoint) }>
            Donec sed odio dui. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.
          </div>
          <div className={ setClass({ default: 'col--5', mobileLg: 'col--12' }, breakpoint) }>
            Donec sed odio dui. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.
          </div>
        </div>

        <div className="cf typ--left py3">
          <div className="col--4">
            Donec sed odio dui. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.
          </div>
          <div className="col--2">
            Donec sed odio dui. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.
          </div>
          <div className="col--2">
            Donec sed odio dui. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.
          </div>
          <div className="col--4">
            Donec sed odio dui. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.
          </div>
        </div>

        <Link to="/sample">Journey to a sample route!</Link>
      </div>
    </div>
  );
};

Home.propTypes = {
  showRSLogo: bool,
  onToggleClick: func,
  quoteOfTheDay: string,
  getQuoteOfTheDay: func,
  breakpoint: object
};

const mapDispatchToProps = dispatch => ({
  onToggleClick: () => dispatch(toggleRSLogo()),
  getQuoteOfTheDay: () => dispatch(getQuoteOfTheDay())
});

const mapStateToProps = state => ({
  showRSLogo: state.example.toggleRSLogo,
  quoteOfTheDay: state.example.quoteOfTheDay,
  breakpoint: state.breakpoint
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
