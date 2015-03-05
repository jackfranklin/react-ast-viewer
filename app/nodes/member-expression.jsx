import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  render: function() {
    return (
      <ul>
        <li><strong>Object</strong>: <ASTNode node={this.props.node.object} parentPath={`${this.path()}.object`} /></li>
        <li><strong>Property</strong>: <ASTNode node={this.props.node.property} parentPath={`${this.path()}.property`} /></li>
      </ul>
    );
  }
});
