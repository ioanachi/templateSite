import React from 'react';
import styles from './style.scss';
import logo from '../../img/image.png';

const NavBar = props => {

  return (
    <div className={styles.showing}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="headerLogo" className={styles.logo} />
      </div>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>
          three
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
            <li>five</li>
            <li>six</li>
          </ul>
        </li>
        <li>four</li>
        <li>five</li>
        <li>six</li>
      </ul>
    </div>
  );
};

export default NavBar;
