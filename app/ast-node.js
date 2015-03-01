import React from 'react';
import componentFinder from './node-component-finder';

export default React.createClass({
  render: function() {
    var output = null;
    { console.log('node type', this.props.node.type, this.props.node); }
    var newElementComponent = componentFinder(this.props.node.type);

    if(newElementComponent) {
      output = React.createElement(newElementComponent, { node: this.props.node });
    }

    return (<div>{output}</div>)
  }
});
