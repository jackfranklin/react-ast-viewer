import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  getInitialState: function() {
    return { isFocused: false }
  },
  render: function() {
    return (
      <ul>
        <li><strong>id</strong>: <ASTNode parentPath={this.path() + '.id'} node={this.props.node.id} /></li>
        <li><strong>init</strong>: <ASTNode parentPath={this.path() + '.init'} node={this.props.node.init} /></li>
      </ul>
    );
  }
});
