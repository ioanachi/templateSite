import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import AppError from 'components/AppError';
import Header from 'components/Header';
import SubHeader from 'components/SubHeader';
import BodyComponent from 'components/BodyComponent';
import Sample from 'routes/Sample';
import './style.scss';

const App = () => (
  <ErrorBoundary fallbackComponent={AppError}>
    <main>
      <div className="container">
        <Header />
        <SubHeader />
        <Switch>
          <BodyComponent />
        </Switch>
      </div>
    </main>
  </ErrorBoundary>
);

export default App;
