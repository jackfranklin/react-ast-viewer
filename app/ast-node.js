import React from 'react';
import FunctionDeclaration from './nodes/function-declaration';
import BlockStatement from './nodes/block-statement';

const NODE_COMPONENTS = {
  FunctionDeclaration,
  BlockStatement
};

export default React.createClass({
  render: function() {
    return (
      <div>
        <p> {this.props.node.type} </p>
        { console.log(this.props.node.type) }
        {React.createElement(NODE_COMPONENTS[this.props.node.type],  {node: this.props.node})}
      </div>
    )
  }
});
