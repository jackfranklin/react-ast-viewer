import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  renderArgument: function() {
    return (
      <li>
        <strong>argument</strong>:
        <ASTNode node={this.props.node.argument} parentPath={this.path() + '.argument'} />
      </li>
    );
  },
  render: function() {
    return (
      <ul>
        <li><strong>operator</strong>: { this.props.node.operator }</li>
        <li><strong>prefix</strong>: { this.props.node.prefix }</li>
        { this.renderArgument() }
      </ul>
    );
  }
});
