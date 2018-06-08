import React from 'react';
import { Dropdown } from './index';
import { shallow } from 'enzyme';

describe('Dropdown', () => {
  const onTitleClickSpy = jasmine.createSpy('onTitleClickSpy');
  const onItemClickSpy = jasmine.createSpy('onItemClickSpy');
  const props = {
    items: [{ label: 'Monkey', value: 1, className: 'animal' }, { label: 'Snake', value: 2, className: 'animal' }],
    title: 'Animals',
    onTitleClick: onTitleClickSpy,
    selectedIndices: [0],
    onItemClick: onItemClickSpy
  };

  describe('finalTitle renders properly', () => {
    test('when replaceTitle is false', () => {
      const comp = shallow(<Dropdown { ...props } replaceTitle={ false } />);
      expect(comp.find('.dropdown__title').text()).toEqual('Animals');
    });

    test('when replaceTitle is true', () => {
      const comp = shallow(<Dropdown { ...props } replaceTitle={ true } />);
      expect(comp.find('.dropdown__title').text()).toEqual('Monkey');
    });

    test('when multipleSelect is on', () => {
      const comp = shallow(<Dropdown { ...props } multipleSelect={ true } />);
      expect(comp.find('.dropdown__title').text()).toEqual('Animals');
    });
  });

  describe('open and closes properly', () => {
    test('when open prop is true', () => {
      const comp = shallow(<Dropdown { ...props } open={ true } />);
      expect(comp.find('.dropdown')).toHaveClassName('.dropdown--open');
    });

    test('when open prop is false', () => {
      const comp = shallow(<Dropdown { ...props } open={ false } />);
      expect(comp.find('.dropdown')).not.toHaveClassName('.dropdown--open');
    });
  });

  describe('renders all items', () => {
    test('if "items" is an array of objects', () => {
      const comp = shallow(<Dropdown { ...props } open={ true } />);
      expect(comp.find('.dropdown__item').length).toEqual(2);
    });

    test('if "items" is an array of strings', () => {
      const comp = shallow(<Dropdown { ...Object.assign({ items: ['Monkey', 'Snake'] }, props) } open={ true } />);
      expect(comp.find('.dropdown__item').length).toEqual(2);
    });
  });

  describe('callback triggers', () => {
    test('when item is clicked', () => {
      const comp = shallow(<Dropdown { ...props } open={ true } />);
      comp.find('.dropdown__item').first().simulate('click');
      expect(onItemClickSpy).toHaveBeenCalled();
    });

    test('when title is clicked', () => {
      const comp = shallow(<Dropdown { ...props } open={ true } />);
      comp.find('.dropdown__toggle').simulate('click');
      expect(onTitleClickSpy).toHaveBeenCalled();
    });
  });
});
