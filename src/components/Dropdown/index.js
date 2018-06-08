import React from 'react';
import { object, bool, string, arrayOf, shape, any, func, number, oneOfType } from '../../utils/propTypes';

/**
 * A basic dropdown. With the callbacks (onTitleClick and onItemClick) unspecified, will behave sensibly, allowing
 * a single item to be selected at a time, and storing that information in the Redux store.
 * Custom behavior can be tweaked through those components.
 * This dropdown also allows for simple or complex (object) items.
 * @param {Object} props React props object
 * @param {Array} props.items Array of objects or strings representing a dropdown item
 * @param {string} props.items[].label String to show as dropdown option (req)
 * @param {string} props.items[].value String, object, or any other type representing the data to be stored if item selected
 * @param {string[]} props.items[].className Optional additional class to apply to each item
 * @param {string} props.title Title to display before a value is selected (or after, if replaceTitle is false)
 * @param {boolean} props.replaceTitle Whether to replace the title with the current selection
 * @param {boolean} props.multipleSelect Where more than one item can be selected at once
 * @param {Object[]} props.style Optional styles object
 * @param {boolean} props.open - Whether the dropdown is open
 * @param {string} props.className - Optional string of class to apply to Dropdown
 *
 * @returns {React.Component} - A component representing a dropdown connected to the Redux store
 */

export const Dropdown = ({ items, className, title, open, onTitleClick, style, selectedIndices, onItemClick, replaceTitle, multipleSelect }) => {
  const finalItems = typeof items[0] === 'string'
    ? items.map(item => ({ value: item, label: item }))
    : items;

  const titleIndex = selectedIndices[0];

  const finalTitle = selectedIndices.length === 1 && replaceTitle && !multipleSelect
    ? finalItems[titleIndex].label
    : title;

  return (
    <div
      className={ `dropdown ${className || ''} ${open ? 'dropdown--open' : ''} ${multipleSelect ? 'dropdown--multi' : ''}` }
      style={ style }
    >
      <div className="dropdown__toggle" onClick={ onTitleClick }>
        <span className="dropdown__title">{ finalTitle }</span>
        <span className="dropdown__icon" />
      </div>
      <div className="dropdown__menu">
        <ul>
          {
            finalItems.map((item, index) => (
              <li
                className={ `dropdown__item ${selectedIndices.includes(index) ? 'dropdown__item--active' : ''} ${item.className || ''}` }
                key={ index }
                onClick={ () => onItemClick({ index, value: item.value || item.label }) }
              >
                { item.label || item.value }
              </li>
            ))
          }
        </ul>
      </div>
      <select className="dropdown__phantom-menu" value={ selectedIndices[0] }>
        <option value="" disabled={ true }>{ finalTitle }</option>
        {
          finalItems.map((item, index) => (
            <option value={ item.value } key={ index }>
              { item.value }
            </option>
          ))
        }
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  items: oneOfType([
    arrayOf(shape({
      label: string,
      value: any,
      className: string
    })),
    arrayOf(string)
  ]).isRequired,
  title: string.isRequired,
  onTitleClick: func.isRequired,
  onItemClick: func.isRequired,
  selectedIndices: arrayOf(number).isRequired,
  replaceTitle: bool,
  open: bool,
  className: string,
  style: object,
  multipleSelect: bool
};

Dropdown.defaultProps = {
  replaceTitle: true,
  open: false,
  title: 'Select One'
};

export default Dropdown;
