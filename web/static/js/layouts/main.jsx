import React from 'react';
import { Link } from 'react-router';

export default class MainLayout extends React.Component {
  render() {
    return <div>
      <h1>Hello, Phoenix Trello!</h1>
      {this.props.children}
    </div>
  }
}
