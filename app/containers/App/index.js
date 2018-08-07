import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  changeDisplayProperty: state.changeDisplay.changeDisplayProp,
});

export default connect( mapStateToProps,
  null,
  null,
  { pure: false }
)(App);
