import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  render: function() {
    return (
      <ul>
        <li><strong>Expression</strong>: <ASTNode node={this.props.node.expression} /></li>
      </ul>
    );
  }
});
