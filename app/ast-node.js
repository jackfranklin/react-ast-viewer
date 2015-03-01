import React from 'react';
import _ from 'lodash';
import componentFinder from './node-component-finder';

export default React.createClass({
  render: function() {
    var output = null;
    var newElementComponent = componentFinder(this.props.node.type);

    if(newElementComponent) {
      output = React.createElement(newElementComponent, this.props);
    }

    return output;
  }
});
