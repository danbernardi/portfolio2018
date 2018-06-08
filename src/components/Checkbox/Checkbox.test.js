import React from 'react';
import Checkbox from './index';
import { shallow } from 'enzyme';

describe('Checkbox', () => {
  const toggleSpy = jasmine.createSpy('toggleSpy');
  const props = { uid: 'id', name: 'name', toggle: toggleSpy };

  test('has a label', () => {
    const comp = shallow(<Checkbox { ...props } />);
    expect(comp.find('label').length).toEqual(1);
  });

  test('when prop check is true, component is checked', () => {
    const comp = shallow(<Checkbox { ...props } checked={ true } />);
    expect(comp.find('input')).toBeChecked();
  });

  test('toggle checkbox calls callback function', () => {
    const comp = shallow(<Checkbox { ...props } checked={ true } />);
    comp.find('label').simulate('click');
    expect(toggleSpy).toHaveBeenCalled();
  });
});
