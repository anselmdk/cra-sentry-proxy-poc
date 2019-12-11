import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';

Sentry.init({
  //dsn: "https://c3c72996d12b4cdfac24fe1e4900eca8@sentry.io/1854307",
  dsn: "http://c3c72996d12b4cdfac24fe1e4900eca8@localhost:8080/1854307",
  debug: true
});

ReactDOM.render(<App />, document.getElementById('root'));

