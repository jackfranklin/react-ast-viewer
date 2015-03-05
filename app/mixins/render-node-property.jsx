import React from 'react';
import ASTNode from 'app/ast-node.jsx!';

export default {
  renderNode: function(propertyName, optional=false) {
    if(optional && !this.props.node[propertyName]) {
      return null;
    }

    return (
      <li>
        <strong>{propertyName}</strong>:
        <ASTNode
          node={this.props.node[propertyName]}
          parentPath={`${this.path()}.${propertyName}`}
        />
      </li>
    );
  },
  renderProp: function(propertyName, optional=false) {
    if(optional && !this.props.node[propertyName]) {
      return null;
    }

    return (
      <li>
        <strong>{propertyName}</strong>:
        { this.props.node[propertyName] }
      </li>
    );
  }
}
