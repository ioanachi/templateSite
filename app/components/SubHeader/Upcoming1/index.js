import * as React from 'react';
import styles from './style.scss';
import pic from '../../../img/headerimg.png';

const Upcoming1 = () => (
  <div className={`row ${styles.up1}`}>
    <div className={`col-sm-3 ${styles.upleft}`}>
      <img className={styles.imageup1} src={pic} alt="upcoming1" />
    </div>
    <div className={`col-sm-9 ${styles.upright}`}>
      <p>Upcoming LMS with:</p>
      <p className={styles.author}>Timothy Lucas</p>
      <p className={styles.date}>Monday 02, July 2018-10AM (30min)</p>
    </div>
  </div>
);

export default Upcoming1;
