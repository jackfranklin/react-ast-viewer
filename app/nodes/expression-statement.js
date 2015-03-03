import React from 'react';
import ASTNode from '../ast-node';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  render: function() {
    return (
      <ul>
        <li><strong>Expression</strong>: <ASTNode node={this.props.node.expression} parentPath={`${this.path()}.expression`} /></li>
      </ul>
    );
  }
});
