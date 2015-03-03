import React from 'react';
import Router from 'react-router';

var {RouteHandler, Link} = Router;

export default React.createClass({
  render: function() {
    return (
      <div className='app'>
        <ul className='navigation'>
          <li><Link to="app">Tree and Code</Link></li>
          <li><Link to="tree">Tree Only</Link></li>
        </ul>
        <div className='route-handler'><RouteHandler /></div>
      </div>
    );
  }
});
