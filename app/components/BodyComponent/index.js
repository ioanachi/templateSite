import {connect} from 'react-redux';
import BodyComponent from './BodyComponent';



const mapStateToProps = state => ({
  changeDisplayProperty: state.changeDisplay.changeDisplayProp,
});

export default connect( mapStateToProps,
  null,
  null,
  { pure: false }
)(BodyComponent);
