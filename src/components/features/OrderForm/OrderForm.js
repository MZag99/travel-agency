import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, countryCode, tripName, tripId) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    tripId,
    tripName,
    countryCode,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, setOrderOption, options, ...props}) => {
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
        <Button onClick={() => {
          (options.name == '' || options.contact == '') ?
            alert('Please fill name and contact information.') :
            sendOrder(options, tripCost, props.country.alpha3Code, props.name, props.id); //eslint-disable-line react/prop-types
        }}>Order now!</Button>
      </Col>
    </Row>
  );
};
OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  trips: PropTypes.array,
};

export default OrderForm;
