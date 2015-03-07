import React from 'react';
import ASTNode from 'app/ast-node.jsx!';

export default {
  renderNode: function(propertyName, optional=false) {
    if(optional && !this.props.node[propertyName]) {
      return null;
    }

    return (
      <li>
        <ASTNode
          node={this.props.node[propertyName]}
          nodeKey={propertyName}
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
      <li className='node-property'>
        <strong>{propertyName}</strong>{ this.props.node[propertyName] }
      </li>
    );
  },
  renderArrayProps: function(propertyName, optional=false) {
    var items = this.props.node[propertyName].map((item, index) => {
      return (
        <li key={JSON.stringify(item)}>
          <ASTNode nodeKey={propertyName} node={item} parentPath={this.arrayPath(propertyName, index)} />
        </li>
      );
    });

    if(optional && !items.length) {
      return null;
    }

    return (
      <li><ul> { items } </ul></li>
    );
  }
}
