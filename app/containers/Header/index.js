import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import { changedisplayAction } from '../../actions';

const mapStateToProps = state => ({
  changeDisplayProperty: state.changeDisplay.changeDisplayProp,
});

const dispatchStateToProps = dispatch =>
  bindActionCreators(
    {
      changedisplayAction,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  dispatchStateToProps,
  null,
  { pure: false }
)(Header);
