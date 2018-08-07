import * as React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import AppError from 'components/AppError';
import Header from 'containers/Header';
import SubHeader from 'components/SubHeader';
import BodyComponent from 'components/BodyComponent';
import styles from './style.scss';
import logo from "../../img/image.png";

const App = props => {
  const { changeDisplayProperty } = props;
  console.log(changeDisplayProperty, "return");
  return (
    <ErrorBoundary fallbackComponent={AppError}>
      <main>


        <div className="container" >
          <div className={changeDisplayProperty === true ? styles.showing : styles.hidden}>
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
          <Header />
          <SubHeader />
          <Switch>
            <BodyComponent />
          </Switch>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default App;
