import { connect } from 'react-redux';
import SubHeader from './SubHeader';

const mapStateToProps = state => ({
  changeDisplayProperty: state.changeDisplay.changeDisplayProp,
});

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(SubHeader);
