import React from 'react';
import ASTNode from '../../ast-node';

export default React.createClass({
  render: function() {
    var items = this.props.items.map((item) => {
      return <li key={JSON.stringify(item)}><ASTNode node={item} /></li>;
    });

    if(items.length > 0) {
      return <li><strong>{this.props.nodeTitle}</strong>: <ul>{ items }</ul></li>;
    } else {
      return null;
    }
  }
});
