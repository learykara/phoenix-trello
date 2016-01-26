import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistory } from 'redux-simple-router';

import configureStore from './store';
import Root from './containers/root';

const store = configureStore();
const history = createBrowserHistory();

syncHistory(browserHistory);

const target = document.getElementById('main_container');
const node = <Root routerHistory={history} store={store}/>;

ReactDOM.render(node, target);
