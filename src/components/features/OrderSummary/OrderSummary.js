import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderSummary = ({tripCost, options}) => {
  return (
    <h2 className={styles.component}>
      {'Total: '}
      <strong>
        {formatPrice(calculateTotal(tripCost, options))}
      </strong>
    </h2>
  );
};
OrderSummary.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
};

export default OrderSummary;
