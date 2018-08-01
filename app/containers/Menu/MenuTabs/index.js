import * as React from 'react';
import styles from './style.scss';

const MenuTabs = () => (
  <div>
    <div className={styles.tabsContainer}>
      <div>
        <p>Projects for review</p>
      </div>
      <div>
        <p>Upcoming LMS</p>
      </div>
      <div>
        <p>Syllabus</p>
      </div>
      <div>
        <p>My Videos</p>
      </div>
    </div>
  </div>
);
export default MenuTabs;
