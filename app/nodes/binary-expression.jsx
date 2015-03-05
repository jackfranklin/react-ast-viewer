import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  render: function() {
    return (
      <ul>
        <li><strong>left</strong>: <ASTNode node={this.props.node.left} parentPath={`${this.path()}.left`} /></li>
        <li><strong>right</strong>: <ASTNode node={this.props.node.right} parentPath={`${this.path()}.right`} /></li>
      </ul>
    );
  }
});
