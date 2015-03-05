import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';
import RenderNodeMixin from '../mixins/render-node-property.jsx!';

export default React.createClass({
  mixins: [PathMixin, RenderNodeMixin],
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
        { this.renderProp('operator') }
        { this.renderProp('prefix') }
        { this.renderNode('argument') }
      </ul>
    );
  }
});
