import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  render: function() {
    return (
      <ul>
        <li><strong>argument</strong>: <ASTNode node={this.props.node.argument} parentPath={`${this.path()}.argument`} /></li>
      </ul>
    );
  }
});
