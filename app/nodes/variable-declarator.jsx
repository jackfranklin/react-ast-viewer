import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';
import RenderNodeMixin from '../mixins/render-node-property.jsx!';

export default React.createClass({
  mixins: [PathMixin, RenderNodeMixin],
  getInitialState: function() {
    return { isFocused: false }
  },
  render: function() {
    return (
      <ul>
        { this.renderNode('id') }
        { this.renderNode('init', true) }
      </ul>
    );
  }
});
