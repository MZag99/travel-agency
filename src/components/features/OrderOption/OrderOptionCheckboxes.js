import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, setOptionValue, currentValue}) => {
  return (
    <div>
      <div className={styles.checkboxes}>
        {values.map(value => (
          <label key={value.id}>
            <input type='checkbox' value={value.id} onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))} checked={(currentValue.indexOf(value.id) > -1)}>  
            </input>
            {`${value.name}: ${formatPrice(value.price)}`}
          </label>
        ))}  
      </div>
    </div>
  );
};
OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.node,
};

export default OrderOptionCheckboxes;
