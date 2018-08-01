import * as React from 'react';
import styles from './style.scss';
import pic from '../../img/headerimg.png';

export default () => (
  <div className="row">
    <div className={`${styles.headerContainer} col-sm-12`}>
      <div className={styles.logoContainer}>
        <p className={styles.logo}>smashcut</p>
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
