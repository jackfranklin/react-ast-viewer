import React from 'react';
import ASTNode from '../ast-node';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  render: function() {
    return (
      <ul>
        <li><strong>body</strong>: <ASTNode node={this.props.node.body} parentPath={`${this.path()}.body`} /></li>
      </ul>
    );
  }
});
