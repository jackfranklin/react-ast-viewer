import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';
import RenderNodeMixin from '../mixins/render-node-property.jsx!';

export default React.createClass({
  mixins: [PathMixin, RenderNodeMixin],
  render: function() {
    var properties = this.props.node.properties.map((property, index) => {
      return (
        <li key={index}>
          <ASTNode parentPath={this.arrayPath('properties', index)} node={property} />
        </li>
      )
    });

    return (
      <ul>
        { this.renderArrayProps('properties') }
      </ul>
    );
  }
});
