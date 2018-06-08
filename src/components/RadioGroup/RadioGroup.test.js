/*global test */

import React from 'react';
import { RadioGroup } from './index';
import { shallow } from 'enzyme';

const checkSpy = jasmine.createSpy('checkSpy');
const props = {
  items: [
    'Some Item',
    'Some Item 2',
    {
      label: 'some label',
      value: 'selected-value',
      tag: 'some tag'
    }],
  uid: 'uid',
  className: null,
  selectedValue: 'selected-value',
  onCheck: checkSpy
};

const comp = shallow(<RadioGroup { ...props } />);

test('should generate a set of radio buttons', () => {
  const radioList = comp.find('.radio');
  const inputList = radioList.children();

  expect(inputList.length).toBe(props.items.length);
});

test('should set selected item based on props.selectedValue', () => {
  const inputs = comp.find('.radio__input');

  inputs.forEach((input, index) => {
    const selectedIndex = 2;
    expect(input.prop('checked')).toBe(selectedIndex === index);
  });
});

test('should set attributes based on values from props', () => {
  const inputs = comp.find('.radio__input');

  inputs.forEach((input, index) => {
    expect(input.prop('name')).toBe(props.uid);

    const value = typeof props.items[index] === 'object' ? props.items[index].value : props.items[index];
    expect(input.prop('value')).toBe(value);
  });
});

test('should render a radio__tag when tag property is present', () => {
  expect(comp.find('.radio__tag').length).toBe(1);
});

test('should call props.onCheck when label is clicked', () => {
  const lis = comp.find('.radio__li');
  lis.forEach((li) => {
    li.simulate('click');
    expect(checkSpy).toHaveBeenCalled();
  });
});
