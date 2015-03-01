import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  render: function() {
    return (
      <ul>
        <li><strong>key</strong>: <ASTNode parentPath={this.path() + '.key'} node={this.props.node.key} /></li>
        <li><strong>value</strong>: <ASTNode parentPath={this.path() + '.value'} node={this.props.node.value} /></li>
      </ul>
    );
  }
});
