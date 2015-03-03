import React from 'react';
import Router from 'react-router';
import Home from './home';

var {Route, DefaultRoute} = Router;

var routes = (
  <Route handler={Home} path="/">
    <DefaultRoute handler={Home} />
  </Route>
);

export default function() {
  Router.run(routes, function (Handler) {
    React.render(<Handler />, document.querySelector('.wrap'));
  });
};
