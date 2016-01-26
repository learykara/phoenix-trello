import invariant from 'invariant';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, RoutingContext } from 'react-router';

import routes from '../routes';

export default class Root extends React.Component {
  _renderRouter() {
    const { routingContext, routerHistory } = this.props;
    invariant(
      routingContext || routerHistory,
      '<Root /> needs either a routingContext or a routerHistory to render.'
      );

    if (routingContext) {
      return <RoutingContext {...routingContext}/>;
    } else {
      return <Router history={routerHistory}>
        {routes}
      </Router>
    }
  }

  render() {
    return <Provider store={this.props.store}>
      {this._renderRouter()}
    </Provider>
  }
}
