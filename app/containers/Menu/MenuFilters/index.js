import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';

const MenuFilters = () => (
  <div className={styles.menuFilters}>
    <div className={styles.sorting}>
      <div className={styles.sortBtn}>
        <p>Sort</p>
      </div>
      <Link className={styles.newL} to="/sort/newest">
        Newest
      </Link>
      <Link className={styles.newL} to="/sort/oldest">
        Oldest
      </Link>
    </div>
    <div className={styles.filtering}>
      <div className={styles.filterBtn}>
        <p>Filter</p>
      </div>
      <Link className={styles.newL} to="/sort/newest">
        All
      </Link>
      <Link className={styles.newL} to="/sort/oldest">
        Ready to review
      </Link>
      <Link className={styles.newL} to="/sort/oldest">
        Reviewed
      </Link>
    </div>
  </div>
);
export default MenuFilters;
