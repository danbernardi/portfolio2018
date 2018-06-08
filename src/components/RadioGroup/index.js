import React from 'react';
import { arrayOf, string, func, oneOfType, shape } from '../../utils/propTypes';
import './RadioGroup.css';

/**
 * Renders a group of redux-connected radio buttons
 *
 * @param {Object} props React props object
 * @param {string} props.uid Unique identifier of this radio group in Redux
 * @param {string} props.className Optional additional classes
 * @param {Object[]} props.items List of radio item object
 * @param {string} props.selectedValue String of selected value
 * @param {Function} props.onCheck Run when a radio button is clicked, and passed the uid and item
 *
 * @returns {React.Component} A group of radio buttons
 */
export function RadioGroup ({ uid, className, items, selectedValue, onCheck }) {
  const fullItems = items.map((item, index) => {
    let fullItem;

    if (typeof item === 'string') {
      fullItem = {
        label: item,
        value: item,
        index
      };
    } else {
      fullItem = Object.assign({}, item, { index });
    }
    return fullItem;
  });

  return (
    <ul className={ className || 'radio rscomp' }>
      {
        fullItems.map(item => {
          const selected = selectedValue === item.value;
          return (
            <li
              className={ selected ? 'radio__li--selected' : 'radio__li' }
              key={ item.index }
              onClick={ () => { onCheck(item); } }
            >
              <label className="radio__label" htmlFor={ item.value }>
                <input
                  className="radio__input"
                  type="radio"
                  checked={ selectedValue === item.value }
                  onChange={ () => {} }
                  name={ uid }
                  value={ item.value }
                />
                <span className="radio__mark" />
                <span className="radio__text">{ item.label }</span>
              </label>
              { item.tag && <span className="radio__tag">{ item.tag }</span> }
            </li>
          );
        })
      }
    </ul>
  );
}

RadioGroup.propTypes = {
  items: arrayOf(
    oneOfType([
      shape({
        label: string,
        value: string.isRequired,
        tag: string
      }),
      string
    ]).isRequired
  ).isRequired,
  uid: string.isRequired,
  className: string,
  selectedValue: string,
  onCheck: func.isRequired
};

export default RadioGroup;
