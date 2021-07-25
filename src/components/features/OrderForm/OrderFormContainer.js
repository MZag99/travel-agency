import { connect } from 'react-redux';
import { getOrderOptions } from '../../../redux/orderRedux';
import OrderForm from './OrderForm';

const mapStateToProps = (state) => {
  const options = getOrderOptions(state);

  return {
    options,
  };
};

export default connect(mapStateToProps)(OrderForm);