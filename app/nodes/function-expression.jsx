import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';
import RenderNodeMixin from '../mixins/render-node-property.jsx!';

export default React.createClass({
  mixins: [PathMixin, RenderNodeMixin],
  render: function() {
    var params = this.props.node.params.map((param, index) => {
      return (
        <li key={index}>
          <ASTNode parentPath={this.arrayPath('params', index)} node={param} />
        </li>
      );
    });

    if(params.length) {
      var paramsOutput = <li><strong>params</strong>: <ul> { params } </ul></li>;
    }

    return (
      <ul>
        { paramsOutput }
        { this.renderNode('body') }
      </ul>
    );
  }
});
