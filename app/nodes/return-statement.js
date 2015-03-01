import React from 'react';
import ASTNode from '../ast-node';

export default React.createClass({
  render: function() {
    return (
      <ul>
        <li><strong>argument</strong>: <ASTNode node={this.props.node.argument} /></li>
      </ul>
    );
  }
});
