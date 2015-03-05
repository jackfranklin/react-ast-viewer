import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';
import RenderNodeMixin from '../mixins/render-node-property.jsx!';

export default React.createClass({
  mixins: [PathMixin, RenderNodeMixin],
  render: function() {
    return (
      <ul>
        { this.renderNode('test') }
        { this.renderNode('consequent') }
        { this.renderNode('alternate', true) }
      </ul>
    );
  }
});
