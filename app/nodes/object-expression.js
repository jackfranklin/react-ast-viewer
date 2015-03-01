import React from 'react';
import ASTNode from '../ast-node';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  render: function() {
    var properties = this.props.node.properties.map((property, index) => {
      return (
        <li key={index}>
          <ASTNode parentPath={this.arrayPath('properties', index)} node={property} />
        </li>
      )
    });

    return (
      <ul><li><strong>properties</strong>: <ul>{ properties }</ul></li></ul>
    );
  }
});
