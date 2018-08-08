import { connect } from 'react-redux';
import NavBar from './NavBar';

const mapStateToProps = state => {
  return {
    changeDisplayProperty:state.changeDisplay.changeDisplayProp
  };
};

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(NavBar);






