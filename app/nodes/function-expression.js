import React from 'react';
import ASTNode from '../ast-node';

export default React.createClass({
  render: function() {
    return (
      <ul>
        <li><strong>body</strong>: <ASTNode node={this.props.node.body} /></li>
      </ul>
    );
  }
});
