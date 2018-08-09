import React, { PureComponent } from 'react';
import styles from './style.scss';
import pic from '../../img/headerimg.png';

class Header extends PureComponent {
  constructor(props) {
    super(props);
  }

  showHeaderM = () => {
    const localDisplay = !this.props.changeDisplayProperty;

    this.props.changedisplayAction(localDisplay);
  };

  render() {
    return (
      <div className="row">
        <div className={`${styles.headerContainer} col-sm-12`}>
          <div className={styles.menuContainer}>
            <i
              className="fa fa-bars"
              onClick={() => {
                this.showHeaderM();
              }}
            />
          </div>

          <div className={styles.headerSecond}>
            <div className={styles.userPhoto}>
              <img src={pic} alt="user" />
              <i className="fa fa-angle-down" />
            </div>
            <div className={styles.dashboardLink}>DASHBOARD</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
