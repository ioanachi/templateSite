import * as React from 'react';
import styles from './style.scss';
import pic from '../../img/headerimg.png';

const Sidebar = () => (
  <div>
    <div className={`row ${styles.sidebar}`}>
      <div className={`col-sm-12 ${styles.upperBar}`}>
        <p>My students</p>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="col-sm-3">
          <img className={styles.image} alt="student10" src={pic} />
        </div>
        <div className={`col-sm-9 ${styles.name}`}>
          <p>John Marshall</p>
          <p className={styles.class}>Cinematography 101</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="col-sm-3">
          <img className={styles.image} alt="student2" src={pic} />
        </div>
        <div className={`col-sm-9 ${styles.name}`}>
          <p>Timothy Lucas</p>
          <p className={styles.class}>Cinematography 101</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="col-sm-3">
          <img className={styles.image} alt="student1" src={pic} />
        </div>
        <div className={`col-sm-9 ${styles.name}`}>
          <p>Ian Wright</p>
          <p className={styles.class}>Cinematography 101</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="col-sm-3">
          <img className={styles.image} alt="student5" src={pic} />
        </div>
        <div className={`col-sm-9 ${styles.name}`}>
          <p>Brian Clark</p>
          <p className={styles.class}>Cinematography 101</p>
        </div>
      </div>
    </div>
  </div>
);
export default Sidebar;
