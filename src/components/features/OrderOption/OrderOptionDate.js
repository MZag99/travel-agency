import  React, {useState} from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.scss';
import { formatDate } from '../../../utils/formatDate';
import PropTypes from 'prop-types';

const OrderOptionDate = ({setOptionValue}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.date}>
      <DatePicker selected={startDate} onChange={(date) => {
        setStartDate(date);
        setOptionValue(formatDate(date));
      }} />
    </div>
  );
};
OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};
export default OrderOptionDate;
