import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IRouter from './router';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
Sentry.init({
  release: 'test004',
  dsn: "https://b0e87f818a464f319892f9c0eeb5e39e@o209216.ingest.sentry.io/5303156",
/*   beforeSend(event, hint) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  } */
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <IRouter />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
