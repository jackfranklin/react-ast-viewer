import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';
import RenderNodeMixin from '../mixins/render-node-property.jsx!';

export default React.createClass({
  mixins: [PathMixin, RenderNodeMixin],
  render: function() {
    var callArgs = this.props.node.arguments.map((arg, index) => {
      return (
        <li key={index}><ASTNode node={arg} parentPath={this.arrayPath('arguments', index)} /></li>
      );
    });

    return (
      <ul>
        { this.renderNode('callee') }
        <li><strong>Arguments</strong>: <ul> { callArgs } </ul></li>
      </ul>
    );
  }
});
