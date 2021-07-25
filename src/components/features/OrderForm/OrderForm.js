import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

const OrderForm = ({tripCost, options}) => {
  return (
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost = {tripCost} options = {options}/>
      </Col>
    </Row>
  );
};
OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
};

export default OrderForm;
