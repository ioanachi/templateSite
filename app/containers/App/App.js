import * as React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary';
import AppError from 'components/AppError';
import Header from 'containers/Header';
import NavBar from 'containers/NavBar';
import SubHeader from 'components/SubHeader';
import BodyComponent from 'components/BodyComponent';
import styles from './style.scss';

const App = props => {
  const { changeDisplayProperty } = props;

  return (
    <ErrorBoundary fallbackComponent={AppError}>
      <main>
        <div className="container">
          <NavBar />
          <div className={changeDisplayProperty === true ? styles.open : styles.closed}>
            <Header />
            <SubHeader />
            <Switch>
              <BodyComponent />
            </Switch>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default App;
