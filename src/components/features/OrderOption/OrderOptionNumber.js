import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => {
  return (
    <div>
      <div className={styles.number}>
        <input type='number' 
          className={styles.inputSmall} 
          value={currentValue}
          min={limits.min}
          max={limits.max}
          onChange={event => {
            setOptionValue(event.currentTarget.value);
          }}
        >
        </input>
        {` ${formatPrice(price)}`}
      </div>
    </div>
  );
};
OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  price: PropTypes.node,
};

export default OrderOptionNumber;
