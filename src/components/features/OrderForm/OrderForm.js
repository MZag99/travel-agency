import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({tripCost, setOrderOption, options}) => {
  return (
    <Row>
      {pricing.map(option => (
        <Col key={option.id} md={4}>
          <OrderOption 
            setOrderOption={setOrderOption}
            currentValue={options[option.id]}
            {...option}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost = {tripCost} options = {options}/>
      </Col>
    </Row>
  );
};
OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
