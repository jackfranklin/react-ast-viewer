import React from 'react';
import Router from 'react-router';
import Index from './index';
import About from './about';
import App from './app';
import Tree from './tree';

var {Route, DefaultRoute} = Router;

var routes = (
  <Route handler={App} path="/" name="app">
    <Route name="tree" handler={Tree} />
    <DefaultRoute handler={Index} />
  </Route>
);

export default function() {
  Router.run(routes, function (Handler) {
    React.render(<Handler />, document.querySelector('.wrap'));
  });
};
