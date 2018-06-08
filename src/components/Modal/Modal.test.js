/*global test*/
import React from 'react';
import { ModalUC } from './index';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

describe('', () => {
  test('renders a modal__wrapper element if open modal matches id', () => {
    const comp = shallow(
      <ModalUC
        openModal={ fromJS({ id: 'modal', data: {} }) }
        modals={ { modal: <div /> } }
      />
    );

    expect(comp.find('div.modal__wrapper')).toBeDefined();
  });

  test('renders null if open modal does not match id', () => {
    const comp = shallow(
      <ModalUC
        openModal={ fromJS({ id: 'modalA', data: {} }) }
        modals={ { modalB: <div /> } }
      />
    );

    expect(comp.find('div')).toHaveLength(0);
  });

  test('renders the correct modal child element', () => {
    const comp = shallow(
      <ModalUC
        openModal={ fromJS({ id: 'modal', data: {} }) }
        modals={ { modal: <div className="modal__child">modal child</div> } }
      />
    );

    expect(comp.find('.modal__child')).toHaveText('modal child');
  });

  test('passes data object to child correctly', () => {
    const comp = shallow(
      <ModalUC
        openModal={ fromJS({ id: 'modal', data: { string: 'hi there' } }) }
        modals={ { modal: <div className="modal__child">modal child</div> } }
      />
    );

    expect(comp.find('.modal__child')).toHaveProp('data', { string: 'hi there' });
  });
});
