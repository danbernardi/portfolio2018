import React from 'react';
import { string, func, bool } from '../../utils/propTypes';

/**
 * Renders a Checkbox with label
 * @param {Object} props React props object
 * @param {string} props.uid - Unique string identifier of checkbox
 * @param {string} props.name - Label text to display
 * @param {boolean} props.checked - Whether the box is checked
 * @param {function} props.toggle - Toggles the checkbox
 *
 * @param {string[]} props.className - Optional additional classes
 *
 * @returns {React.Component} A checkbox with globally-tracked value
 */

export const Checkbox = ({ name, toggle, checked, className, uid }) => (
  <label
    className={ className || '' }
    id={ uid }
    htmlFor={ name }
    onClick={ () => { toggle(!checked); } }
  >
    <input
      className="checkable__input"
      type="checkbox"
      name={ name }
      checked={ !!checked }
    />
    <span className="checkable__mark" />
    <span className="checkable__label">{ name }</span>
  </label>
);

Checkbox.propTypes = {
  uid: string.isRequired,
  name: string.isRequired,
  className: string,
  toggle: func.isRequired,
  checked: bool
};

export default Checkbox;
