import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';
import { connect } from 'react-redux';
import { getOrderOptions} from '../../../redux/orderRedux';

const OrderOptionIcons = ({values, setOptionValue, required, options}) => {
  return (
    <div className={styles.component}>
      {required ? '' : (
        <div onClick={setOptionValue('')} className={styles.icon}>
          <Icon name='times-circle'/>
          {'none'}
        </div>
      )}
      {values.map(value => (
        <div key={value.id} onClick={() => setOptionValue(value.id)} className={
          (options.accommodation == value.id) ?
            styles.iconActive :
            styles.icon
        }>
          <Icon name={value.icon}/>
          {`${value.name}: `}
          {formatPrice(value.price)}
        </div>
      ))}  
    </div>
  );
};
OrderOptionIcons.propTypes ={
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  options: PropTypes.object,
};

const mapStateToProps = (state) => {
  const options = getOrderOptions(state);
  return {
    options,
  };
};

export default connect(mapStateToProps)(OrderOptionIcons);
