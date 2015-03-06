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
  },
  renderArrayProps: function(propertyName, optional=false) {
    var items = this.props.node[propertyName].map((item, index) => {
      return (
        <li key={JSON.stringify(item)}>
          <ASTNode node={item} parentPath={this.arrayPath(propertyName, index)} />
        </li>
      );
    });

    if(optional && !items.length) {
      return null;
    }

    return (
      <li><strong>{ propertyName }</strong>: <ul> { items } </ul></li>
    );
  }
}
