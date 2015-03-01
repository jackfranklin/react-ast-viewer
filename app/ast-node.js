import React from 'react';
import componentFinder from './node-component-finder';

export default React.createClass({
  render: function() {
    var output = null;
    console.log(this.props.node);
    var newElementComponent = componentFinder(this.props.node.type);

    if(newElementComponent) {
      output = React.createElement(newElementComponent, this.props);
    }

    return (<div>{output}</div>)
  }
});
