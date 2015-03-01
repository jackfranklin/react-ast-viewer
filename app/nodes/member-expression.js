import React from 'react';
import ASTNode from '../ast-node';

export default React.createClass({
  render: function() {
    return (
      <ul>
        <li><strong>Object</strong>: <ASTNode node={this.props.node.object} /></li>
        <li><strong>Property</strong>: <ASTNode node={this.props.node.property} /></li>
      </ul>
    );
  }
});
