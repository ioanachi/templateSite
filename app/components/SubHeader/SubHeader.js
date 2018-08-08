import * as React from 'react';
import styles from './styles.scss';
import Upcoming1 from './Upcoming1';

const SubHeader = () => (
  <div className={`row ${styles.containerImg}`}>
    <div className={`col-sm-6, ${styles.upContainer}`}>
      <Upcoming1 />
    </div>
    <div className={`col-sm-6, ${styles.upContainer}`}>
      <Upcoming1 />
    </div>
  </div>
);
export default SubHeader;
