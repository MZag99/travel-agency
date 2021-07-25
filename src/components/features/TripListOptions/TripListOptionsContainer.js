import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationTo, addTag, removeTag, changeDurationFrom} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeDurationFrom: (value) => dispatch(changeDurationFrom(value)), 
  changeDurationTo: (value) => dispatch(changeDurationTo(value)), 
  addTag: (tag) => dispatch(addTag(tag)),
  removeTag: (index) => dispatch(removeTag(index)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
