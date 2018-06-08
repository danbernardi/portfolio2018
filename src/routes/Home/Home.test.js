import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './index';
import { Router } from 'react-router';
import { history } from '../../redux/createStore';
import { shallow } from 'enzyme';

describe('Home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Router history={ history }>
        <Home breakpoint={ { name: 'desktopLg', size: 1400 } } />
      </Router>,
      div
    );
  });

  it('renders 11 div elements', () => {
    const comp = shallow(<Home breakpoint={ { name: 'desktopLg', size: 1400 } } />);
    expect(comp.find('div').length).toEqual(11);
  });
});
