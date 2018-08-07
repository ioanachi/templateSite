import * as React from 'react';
import styles from './styles.scss';
import Upcoming1 from './Upcoming1';

const SubHeader = props => {
  const { changeDisplayProperty } = props;
  return (
    <div className={`row ${styles.containerImg}`} style={changeDisplayProperty === true ? { marginLeft: '100px', transition: 'all 0.3s ease' } : { marginLeft: '0' }}>
      <div className={`col-sm-6, ${styles.upContainer}`}>
        <Upcoming1 />
      </div>
      <div className={`col-sm-6, ${styles.upContainer}`}>
        <Upcoming1 />
      </div>
    </div>
  );
};
export default SubHeader;
